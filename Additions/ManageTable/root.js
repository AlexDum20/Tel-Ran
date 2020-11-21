import {setData} from "./Context/context.js";
import {renderCarTable} from "./Content/Table/render-car-table.js";
import {renderCarForm} from "./Content/Form/render-car-form.js";
import {getCarsAll} from "./HTTP/http-service.js";

const wrap = document.querySelector('[wrap]');
const renderForm = () => renderCarForm(wrap, renderTable);
const renderTable = () => renderCarTable(wrap,renderForm);

const done = (obj) =>{
    setData(obj);
    renderCarTable(wrap,renderForm);
}

getCarsAll(done);