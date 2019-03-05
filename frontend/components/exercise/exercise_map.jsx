import React from "react";
import { removePoint } from "../../util/map_api_util";

class ExerciseMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      polyline: "",
      location: "San Franciso",
      duration: 0,
      name: "",
      done: false,
      startLnt: 0,
      startLat: 0,
      endLnt: 0,
      endLat: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    let map, infoWindow, marker;
    // debugger;
    map = new google.maps.Map(this.mapNode, {
      center: { lat: 37.7997108, lng: -122.4067626 },
      zoom: 15
    });

    infoWindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("This is your current position");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        function() {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
    let polyLine = new google.maps.Polyline({
      strokeColor: "#7FFF00",
      strokeOpacity: 1.0,
      strokeWeight: 3
    });
    polyLine.setMap(map);
    let service = new google.maps.DirectionsService();
    let markers = [];
    let path = new google.maps.MVCArray();

    var input = document.getElementById("sb-input");
    var searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.addListener("bounds_changed", function () {
      searchBox.setBounds(map.getBounds());
    });
    searchBox.addListener("places_changed", function () {
      var places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }

      // Clear out the old markers
      markers.forEach(function (marker) {
        marker.setMap(null);
      });
      markers = [];

      // for each place, get the icon, name and location
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function (place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        // let icon = {
        //   url: place.icon,
        //   size: new google.maps.Size(71, 71),
        //   origin: new google.maps.Point(0, 0),
        //   anchor: new google.maps.Point(17, 34),
        //   scaledSize: new google.maps.Size(25, 25)
        // };

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

    google.maps.event.addListener(map, "click", createRoutes.bind(this));
    // google.maps.event.addListener(marker, "click", createRoutes.bind(this));

    // function removePoint(markers, marker, polyLine) {
    //   for (let i = 0; i < markers.length; i++) {

    //     if (markers[i].position.lat() === marker.position.lat() && markers[i].position.lng() === marker.position.lng()) {
    //       markers[i].setMap(null);
    //       markers.splice(i, 1);
    //       polyLine.getPath().removeAt(i);
    //       polyLine.setPath(path);
    //     }
    //   }
    // }

    

    function createRoutes(event) {
      //------searchbox need to be refactored --------//
      debugger;
      

      ////////////////////////////////////////////////////////////

      marker = new google.maps.Marker({
        position: event.latLng,
        map: map
      });
      markers.push(marker);
      // google.maps.event.addListener(marker, "click", function(event) {
      //   removePoint(markers, marker, polyLine);
      // });
      // debugger;
      if (path.getLength() === 0) {
        path.push(event.latLng);
        polyLine.setPath(path);
        let encodeString = google.maps.geometry.encoding.encodePath(path);
        let lengthInMeters = google.maps.geometry.spherical.computeLength(path);
        this.setState({
          polyline: encodeString,
          distance: lengthInMeters * 0.000621371,
          startLat: parseFloat(event.latLng.lat()),
          startLnt: parseFloat(event.latLng.lng())
        });
      } else {
        service.route(
          {
            origin: path.getAt(path.getLength() - 1),
            destination: event.latLng,
            travelMode: google.maps.DirectionsTravelMode.WALKING
          },
          function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              for (
                let i = 0, len = result.routes[0].overview_path.length;
                i < len;
                i++
              ) {
                path.push(result.routes[0].overview_path[i]);
              }
            }
          }
        );
        let encodeString = google.maps.geometry.encoding.encodePath(path);
        let lengthInMeters = google.maps.geometry.spherical.computeLength(path);
        this.setState({
          polyline: encodeString,
          distance: lengthInMeters * 0.000621371,
          endLat: parseFloat(event.latLng.lat()),
          endLnt: parseFloat(event.latLng.lng())
        });
      }
    }
  }
  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  updateDropdown(event) {
    this.setState({
      exerciseType: event.target.value
    });
  }

  updateCheckBox(event) {
    this.setState({
      done: !this.state.done
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createExercise({
      location: this.state.location,
      distance: this.state.distance.toFixed(2),
      user_id: this.props.userId,
      map: this.state.polyline,
      name: this.state.name,
      done: this.state.done,
      duration: this.state.duration,
      exercise_type: this.state.exerciseType,
      start_lnt: this.state.startLnt,
      start_lat: this.state.startLat,
      end_lnt: this.state.endLnt,
      end_lat: this.state.endLat
    });
    this.props.history.push("/exercises/my_exercises");
  }
  render() {
    let distance;
    if (this.state.distance) {
      distance = this.state.distance;
    } else {
      distance = 0;
    }
    return (
      <div className="exercisemap-main">
        <section className="exercisemap-sidebar">
          <div className="exercisemap-searchbox">
            <div className="exercisemap-searchbox-cap">Choose map location</div>
            <div className="exercisemap-searchbox-body">
              <input id="sb-input" type="text" placeholder="Location" />
            </div>
          </div>
          <div className="exercisemap-details">
            <div className="exercisemap-details-cap">Exercise Details</div>
            <div className="exercisemap-details-body">
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.update("name")}
                    placeholder="Name this map"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    value={this.state.location}
                    onChange={this.update("location")}
                    placeholder="Location"
                  />
                </label>
                <label>
                  <select
                    className="exercisemap-exercisetype"
                    onChange={e => this.updateDropdown(e)}
                  >
                    <option value="" defaultValue disabled>
                      Select your exercise
                    </option>
                    <option value="in-place">in-place</option>
                    <option value="running">running</option>
                    <option value="hiking">hiking</option>
                    <option value="walking">walking</option>/option>
                    <option value="biking">biking</option>
                  </select>
                </label>
                <label>
                  <input
                    type="number"
                    className="exercisemap-distance"
                    onChange={this.update("duration")}
                    value={this.state.duration}
                    placeholder="Duration"
                  />
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="exercisemap-checkbox"
                    onChange={e => this.updateCheckBox(e)}
                    value={this.state.done}
                  />
                </label>
                <input type="submit" value="Save Exercise" />
              </form>
              <label className="exercisemap-distance">
                Distance
                <div>{distance.toFixed(2)}&nbsp;mile</div>
              </label>
            </div>
          </div>
        </section>
        <div className="map-container" ref={map => (this.mapNode = map)} />
      </div>
    );
  }
}

export default ExerciseMap;
