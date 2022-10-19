using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class RecordController : ControllerBase
{
    [HttpGet]
    public string add(string record)
    {
        Console.Out.WriteLine("Successfully added " + record);
        return "Successfully added "+ record;


    }
}