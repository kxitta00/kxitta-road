interface Laptop {
  model: string;
  ram: number;
  isGaming: boolean;
}

const laptops: Laptop[] = [
  { model: "Asus ROG", ram: 32, isGaming: true },
  { model: "MacBook Air", ram: 16, isGaming: false },
  { model: "Acer Nitro", ram: 8, isGaming: true },
  { model: "Lenovo Legion", ram: 16, isGaming: true }
];

function getGamingLaptops(laptops: Laptop[]): string[] {
  const result = laptops.filter(laptops => laptops.ram >= 16 && laptops.isGaming)
    .map(laptops => `${laptops.model} (RAM: ${laptops.ram})`);
  return result;
}

console.log(getGamingLaptops(laptops));