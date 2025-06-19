function someFunction(){
    return 1;
}

function returnData(){
    return "variable"
}
const object = {data:someFunction};
const objectCopy = object;

delete object.data;

object.data = 101;
object["data"] = 204;
object.newData = 3;
object.variable = `"this is a variable"`;
const variableConstant = returnData;
console.log(`object.variable: ${object[variableConstant()]}`); 
console.log(`object.data: ${object["data"]}, type: ${typeof object.data}`);
console.log(`objectCopy.data: ${objectCopy.data}`);
console.log(`object.newData: ${object.newData}`);
console.log();

