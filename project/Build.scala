import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "TradeHack"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
      // Add your project dependencies here,
    	 "com.novus" %% "salat" % "1.9.1"
    )

    val main = PlayProject(appName, appVersion, appDependencies, mainLang = SCALA).settings(
      // Add your own project settings here 
         resolvers ++= Seq(
        		 "repo.novus snaps" at "http://repo.novus.com/snapshots/",
        		 "Local Repo" at "file:///C:/Frameworks/play-2.0.3/repository/local"
        		)
    )

}
