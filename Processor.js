class Processor{
    static Process(data){
        let line = data.split("\r\n");
        let rows = [];

        line.forEach(row => {
            let arr = row.split(";");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;