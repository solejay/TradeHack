package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def about = Action {
    Ok(views.html.about())
  }

  def methodology = Action {
    Ok(views.html.methodology())
  }

  def docs = Action {
    Ok(views.html.docs())
  }
}