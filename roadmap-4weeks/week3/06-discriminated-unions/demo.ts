type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string }
  | { status: "cached"; data: T }

interface Product {
  id: number;
  name: string;
  price: number;
}

function renderUI(state: AsyncState<Product[]>): string {
  switch (state.status) {
    case "idle":
      return "หน้าจอว่าง: กรุณากดปุ่มเพื่อโหลดข้อมูล";
    case "loading":
      return "กำลังโหลดข้อมูลสินค้า";
    case "error":
      return state.message;
    case "success":
      return `พบสิ้นค้าทั้งหมด: ${state.data.length} ชิ้น`;
    case "cached":
      return `ดึงข้อมูลจากแคช: ${state.data.length} ชิ้น`;
    default: {
      const _exhaustiveCheck: never = state;
      return _exhaustiveCheck;
    }
  }
}

console.log(renderUI({ status: "loading" }));;

console.log(renderUI({
  status: "success",
  data: [{ id: 1, name: "keyboard", price: 1500 }]
}));

