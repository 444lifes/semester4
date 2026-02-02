import { NextResponse } from 'next/server';

const laptops = [
  {
    id: 1,
    name: "ASUS ROG Strix SCAR 18",
    gpu: "RTX 5090",
    cpu: "Intel Core i9-14900HX",
    ram: "32GB DDR5",
    storage: "2TB NVMe SSD",
    display: "18\" QHD+ 240Hz Mini LED",
    price: "Rp 89.999.000",
    image: "https://drive.google.com/thumbnail?id=1yREkFHQLJQJY0DldQba7GRjAR7aEpdYI&sz=w1000"
  },
  {
    id: 2,
    name: "MSI Titan 18 HX",
    gpu: "RTX 5090",
    cpu: "Intel Core i9-14900HX",
    ram: "64GB DDR5",
    storage: "4TB NVMe SSD",
    display: "18\" 4K UHD+ 120Hz Mini LED",
    price: "Rp 94.999.000",
    image: "https://drive.google.com/thumbnail?id=1vC11BFldWKC8ZTn9UJ2LX55M1HVQZDPd&sz=w1000"
  },
  {
    id: 3,
    name: "Razer Blade 16",
    gpu: "RTX 5080",
    cpu: "Intel Core i9-14900HX",
    ram: "32GB DDR5",
    storage: "1TB NVMe SSD",
    display: "16\" QHD+ 240Hz OLED",
    price: "Rp 79.999.000",
    image: "https://drive.google.com/thumbnail?id=10Zs69ev0MTtOJFIoCMZmhRH9tmtmcoz9&sz=w1000"
  },
  {
    id: 4,
    name: "Alienware m18 R2",
    gpu: "RTX 5080",
    cpu: "Intel Core i9-14900HX",
    ram: "32GB DDR5",
    storage: "2TB NVMe SSD",
    display: "18\" QHD+ 165Hz",
    price: "Rp 74.999.000",
    image: "https://drive.google.com/thumbnail?id=1DrIehC2m-c2DT54OzNQkCxzcAS9Vxe8y&sz=w1000"
  },
  {
    id: 5,
    name: "Lenovo Legion Pro 7i",
    gpu: "RTX 5070 Ti",
    cpu: "Intel Core i9-14900HX",
    ram: "32GB DDR5",
    storage: "1TB NVMe SSD",
    display: "16\" WQXGA 240Hz",
    price: "Rp 49.999.000",
    image: "https://drive.google.com/thumbnail?id=1tjmA1D2QEClrdsfCr3iD4-VZb55M6lN0&sz=w1000"
  },
  {
    id: 6,
    name: "ASUS TUF Gaming A16",
    gpu: "RTX 5070",
    cpu: "AMD Ryzen 9 7845HX",
    ram: "16GB DDR5",
    storage: "1TB NVMe SSD",
    display: "16\" WQXGA 165Hz",
    price: "Rp 29.999.000",
    image: "https://drive.google.com/thumbnail?id=1eY_9vso-bR6FnyVztz-H3ApswliY6c_h&sz=w1000"
  },
  {
    id: 7,
    name: "Acer Predator Helios 16",
    gpu: "RTX 5070",
    cpu: "Intel Core i7-14700HX",
    ram: "16GB DDR5",
    storage: "1TB NVMe SSD",
    display: "16\" WQXGA 240Hz",
    price: "Rp 36.999.000",
    image: "https://drive.google.com/thumbnail?id=1tP7MduzrKPmP4rz8fEDGI9ne2vdPbp0D&sz=w1000"
  },
  {
    id: 8,
    name: "Gigabyte AORUS 17X",
    gpu: "RTX 5080",
    cpu: "Intel Core i9-14900HX",
    ram: "32GB DDR5",
    storage: "2TB NVMe SSD",
    display: "17.3\" QHD 240Hz",
    price: "Rp 62.999.000",
    image: "https://drive.google.com/thumbnail?id=1Ioup15A2oV4BJxAFjyij0AkV4aiWiEQA&sz=w1000"
  }
];

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 800));

  return NextResponse.json({
    success: true,
    data: laptops
  });
}
