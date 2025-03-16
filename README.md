# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

## Folder Structure
```
├app
├───assets                      // Chứa các tập tin tĩnh.
├───config                      // Chứa các tập tin cấu hình.
├───features                    // Triển khai các tính năng của hệ thống.
│   ├───account                     // Tính năng quản lý người dung.
│   │   ├───assets
│   │   ├───components
│   │   ├───context
│   │   ├───hooks
│   │   ├───routes
│   │   ├───services
│   │   ├───types
│   │   └───utils
│   ├───auth                    // Tính năng xác thực.
│   │   ...
│   ├───create                  // Tính năng tạo thiết kế.
│   │   ...
│   ├───home                    // Hiển thị trang chủ.
│   │   ...
│   ├───order                   // Tính năng đặt hàng.
│   │   ...
│   └───support                 // Hiển thị trang hỗ trợ.
│   │   ...
├───providers                   // Triển khai các Provider bao bọc ứng dụng.
├───routes                      // Chứa các trang giúp triển khai định tuyến.
│   ├───account
│   ├───auth
│   ├───create
│   ├───home
│   ├───order
│   └───support
├───shared                      // Chứa các thành phần được chia sẻ trong toàn bộ hệ thống.
│   ├───components                  // Chứa các components dùng chung trong cả hệ thống.
│   │   ├───elements                    // Các components đơn giản nhất. Ví dụ: Input, Button.
│   │   ├───layouts                     // Các components vừa (2 thành phần trở lên). Ví dụ: SearchBar.
│   │   └───widgets                     // Các components lớn. Ví dụ: Header, Footer.
│   ├───context                     // Chứa các ngữ cảnh (trạng thái toàn cục).
│   ├───hooks                       // Chứa các hook tùy chỉnh.
│   ├───lib                         // Cấu hình các thư viện cần dùng. Ví dụ: axios, react-query.
│   ├───services                    // Triển khai các dịch vụ (gọi API).
│   ├───types                       // Kiểu dữ liệu trong TypeScript.
│   └───utils                       // Một số hành tiện ích.
├───styles                      // Chứa các tập tin định dạng giao diện. Ví dụ: app.css
└───testing                     // Chứa các tập tin kiểm thử.
```