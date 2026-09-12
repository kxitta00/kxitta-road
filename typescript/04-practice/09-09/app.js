
import { parseWarehouseLog, generateWarehouseReport } from "./process.js"

//
const rawInput = document.getElementById("raw-input");
const buttonAudit = document.getElementById("btn-audit");

const statTotal = document.getElementById("stat-total");
const statValid = document.getElementById("stat-valid");
const statCorrupted = document.getElementById("stat-corrupted");
const statRevenue = document.getElementById("stat-revenue")

const ordersBody = document.getElementById("orders-body");

buttonAudit.addEventListener("click", () => {
  const rawText = rawInput.value;
  //
  const text = rawText.split("\n").filter((t) => t.trim() !== "");
  const product = text.map((line) => parseWarehouseLog(line));
  const report = generateWarehouseReport(product)
  statTotal.textContent = report.totalLogs;
  statValid.textContent = report.validLogs;
  statCorrupted.textContent = report.corruptedLogs;
  statRevenue.textContent = `${report.totalRevenue.toLocaleString()} บาท`;
  ordersBody.innerHTML = report.paidOrders.map((order) => `
  <tr>
  <td>${order.id}</td>
  <td>${order.productName}</td>
    <td>${order.quantity}</td>
    <td>${order.unitPrice}</td>
    <td>${order.status}</td>
    </tr>
    `).join("");
});



