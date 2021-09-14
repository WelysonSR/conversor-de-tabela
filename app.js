const Reader=require("./Reader");
const Processor=require("./Processor");
const Table=require("./Table");
const HtmlParser=require("./HtmlParser");
const Writer=require("./Writer");
const PDFWriter=require("./PDFWriter");

let leitor=new Reader();
let escritor= new Writer();

async function main(){
    let dados = await leitor.Read("./ControleDeGastos.csv");    
    let processedData = Processor.Process(dados);
    let user = new Table(processedData);
    let html = await HtmlParser.Parse(user);
    escritor.Write(Date.now()+".html",html);
    PDFWriter.WritePDF(Date.now()+".html",html);
}

main();