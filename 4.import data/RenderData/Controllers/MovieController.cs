using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace RenderData.Controllers
{
  public class MovieController : Controller
  {
    //
    // GET: /Movie/

    public ActionResult Index()
    {
      return View();
    }

    [HttpGet]
    public ActionResult GetList()
    {
      StreamReader sr = new StreamReader(Server.MapPath("/data/movielist.json"));
      return Content(sr.ReadToEnd());
    }

    [HttpGet]
    public ActionResult OneMovie()
    {
      StreamReader sr = new StreamReader(Server.MapPath("/data/onemovie.json"));
      return Content(sr.ReadToEnd());
    }

    [HttpGet]
    public ActionResult GetNewList()
    {
      StreamReader sr = new StreamReader(Server.MapPath("/data/newlist.json"));
      return Content(sr.ReadToEnd());
    }

  }
}
