package models

import com.mongodb.casbah.Imports._
import com.mongodb.casbah.MongoConnection

import com.novus.salat.global._
import com.novus.salat.dao.SalatDAO

case class Constants (commodityName:String,
		importersUlc:Option[Float],
		population:Option[Float],
		openess:Option[Float],
		fxRating:Option[Float],
		outPutGap:Option[Float],
		ownTFP:Option[Float],
		ownUlc:Option[Float],
		oil:Option[Float],
		lcpi:Option[Float],
		stocks:Option[Float],
		reer:Option[Float],
		rpdi:Option[Float],
		commodityId:Option[ObjectiD]
 	id:ObjectId = new ObjectId) 

object Constants extends SalatDAO[Country,ObjectId](
  collection = MongoConnection()("tradehack")("constants")) {
  
  
}