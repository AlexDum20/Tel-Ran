import {productListOrder,setProductListOrder} from "../../Content/content-menu.js";


export const productOrder = (container)=> {
    container.innerHTML = '';
    if (productListOrder.length>0) {
        container.innerHTML = `
        <table class="order-table-headers">
            <tr tableHead></tr>
        </table>
        <div class="order-table-body-wrap">
            <table class="order-table-body" orderTableBody></table>
        </div>
        <table class="order-table-footer">
            <tr tableFooter></tr>
        </table>
        <div class="order-table-but-bar">
            <button addButton>Order</button>
            <button removeButton>Cancel</button>
        </div>
        `;

        const tableHead = document.querySelector('[tableHead]');
        const tableFooter = document.querySelector('[tableFooter]');
        const orderTableBody = document.querySelector('[orderTableBody]');

        tableHead.innerHTML = '<td>ORDER LIST</td>';

        orderTableBody.innerHTML = productListOrder.map(({name, price, count}, index) =>
            `<tr><td>${index + 1}.</td>
        <td>${name}</td>
        <td>:</td>
        <td>${count}</td>
        <td>x</td>
        <td>${price}</td>
        <td>=</td>
        <td>${(price * count).toFixed(2)}</td></tr>`).join('');
        tableFooter.innerHTML = `<td>TOTAL: ${productListOrder.reduce((acc, item) => acc + (item.price * item.count), 0)
            .toFixed(2)}</td>`;

        const order = () => {

        }

        const cancel = () => {
            container.innerHTML = '';
            setProductListOrder([]);
            productOrder(container);
        }

        document.querySelector('[addButton]').addEventListener('click',order);
        document.querySelector('[removeButton]').addEventListener('click',cancel);


    }
}