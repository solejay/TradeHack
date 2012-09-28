package models

import com.mongodb.casbah.Imports._
import com.mongodb.casbah.MongoConnection

import com.novus.salat.global._
import com.novus.salat.dao.SalatDAO

case class Country (name:String, id:ObjectId = new ObjectId) 

object Country extends SalatDAO[Country,ObjectId](
  collection = MongoConnection()("tradehack")("country")) {
  
  
}

