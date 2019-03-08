class Api::ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
    render 'api/exercises/index'
  end

  def create
    exercise_params[:start_lnt] = exercise_params[:start_lnt].to_f
    exercise_params[:start_lat] = exercise_params[:start_lat].to_f
    exercise_params[:end_lnt] = exercise_params[:end_lnt].to_f
    exercise_params[:end_lat] = exercise_params[:end_lat].to_f
    exercise_params[:duration] = exercise_params[:duration].to_i
    exercise_params[:user_id] = exercise_params[:user_id].to_i
    exercise_params[:distance] = exercise_params[:distance].to_f

    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      render :show
    else
      render json: @exercise.errors.full_messages, status: 401
    end
  end

  def edit
    @exercise = Exercise.find(params[:id])
    if @exercise
      render :show
    else
        render json: ["The exercise is not found"], status: 404
    end
  end

  def update
    @exercise = Exercise.find(params[:id])
    if (@exercise.update(exercise_params))
      render :show
    else 
      render json: @exercise.errors.full_messages, status: 401
    end
  end

  def show
    @exercise = Exercise.find(params[:id])
    render :show
  end

  def destroy
    @exercise = Exercise.find(params[:id])
    @exercise.destroy
    render :show
  end

  private
  def exercise_params
    params.require(:exercise).permit(:map, :name, :exercise_type, :location, :distance, :start_lnt, :start_lat, :end_lnt, :end_lat, :duration, :user_id, :done)
  end
end


