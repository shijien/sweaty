class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(exercises) {
        const exercisesObj = {};
        exercises.foreach(exercise => {
            exercisesObj[exercise.id] = exercise;
        });

        exercises
            .filter(exercise => !this.markers[exercise.id])
            .forEach(newExercise => this.createMarkerFromExercise(newExercise, this.handleClick));
        
        Object.keys(this.markers)
            .fileter(exerciseId => !exerciseId[exerciseId])
            .forEach(exerciseId => this.removeMarker(this.markers[exerciseId]))
    }

    createMarkerFromExercise(exercise) {
        const position = new google.maps.LatLng(bench.lat, bench.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            exerciseId: exercise.id
        });

        marker.addListener('click', () => this.handleClick(exercise)); 
        this.markers[marker.exerciseId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.exerciseId].setMap(null);
        delete this.markers[marker.exerciseId];
    }
}

export default MarkerManager;