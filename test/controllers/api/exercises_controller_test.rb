require 'test_helper'

class Api::ExercisesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_exercises_index_url
    assert_response :success
  end

  test "should get create" do
    get api_exercises_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_exercises_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_exercises_update_url
    assert_response :success
  end

  test "should get show" do
    get api_exercises_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_exercises_destroy_url
    assert_response :success
  end

end
