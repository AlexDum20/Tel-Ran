export function constructorMaker (fields){
    return new Function(fields,"{" + fields.map(field => "this." + field + "=" + field).join(";") + ";}");

}


