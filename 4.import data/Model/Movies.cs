using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Movies
    {
      public Int64 Id { get; set; }
      public string Name { get; set; }
      public string Logo { get; set; }
      public Int64 UpdateId { get; set; }

      public DateTime UpdateDate { get; set; }
    }
}
