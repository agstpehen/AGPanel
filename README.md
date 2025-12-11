# AGPanel - Professional Admin Dashboard Template

A comprehensive, modern admin dashboard template built with Bootstrap 5.3.0, featuring a complete set of professional admin panel pages and components.

## 🚀 Features

### Core UI Screens

Dashboard – Key metrics, charts, statistics UI

User Management UI – User list, edit, add pages (UI only)

Role & Permission UI – Role list and permission layout (UI only)

Master Data UI – Territories, stores, electronics products, customers, vendors

Sales Screens (UI) – Sales entry and sales list for electronics (Laptops, Phones, Desktops)

Inventory Screens – Stock list and stock movement UI

Reports UI – Analytics and report pages

Settings UI – Configuration UI layouts

Activity Logs UI – Visual log listing pages

(Note: These are UI templates only; no backend logic or database is included.)

## 📁 Project Structure

```
AGPanel/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── js/
│       └── main.js            # Main JavaScript file
├── index.html             # Main dashboard
├── login.html                 # Login page
├── users.html                 # User management
├── roles.html                 # Role & permission management
├── master-data.html           # Master data management
├── sales.html                 # Sales & transactions
├── sales-details.html         # Sales details breakdown
├── sales-territory-details.html # Territory sales report (Electronics)
├── inventory.html             # Inventory management
├── reports.html               # Reports & analytics
├── settings.html              # Settings & configuration
├── logs.html                  # Audit logs
├── charts.html                # Charts showcase
├── tables.html                # Tables showcase
├── forms.html                 # Forms showcase
├── widgets.html               # UI widgets showcase
├── buttons.html               # Button variations
├── gallery.html               # Image gallery
├── tabs.html                  # Tabbed content
├── accordion.html             # Accordion components
├── cards.html                 # Card variations
├── alerts.html                # Alert components
├── progress.html              # Progress bars
├── modals.html                # Modal dialogs
├── tooltips.html              # Tooltip examples
├── activity.html              # Activity timeline
├── file-manager.html          # File manager
├── onboarding.html            # Onboarding wizard
├── inbox.html                 # Inbox
├── notifications.html         # Notifications
├── projects.html              # Project management
├── calendar.html              # Calendar
├── pricing.html               # Pricing plans
├── faq.html                   # FAQ
├── invoice.html               # Invoice
├── profile.html               # User profile
├── blank.html                 # Blank template
├── 404.html                   # 404 error page
├── 500.html                   # 500 error page
├── access-denied.html         # Access denied page
└── README.md                  # This file
```
🎨 UI Components

Charts – Line, bar, doughnut charts using Chart.js

Tables – Sorting, pagination, filtering (UI design)

Forms – Professional form layouts with modern styles

Widgets – Cards, stats, info widgets

Buttons – Multiple button designs

Gallery – Image gallery with lightbox

Tabs & Accordions – Organized content navigation

Cards – Modern card layouts

Alerts – Alert styles

Progress Bars – Indicators

Modals – Popup UI components

Tooltips – Tooltip styles

Activity Timeline – Visual activity feed

File Manager UI – Upload & file list UI

Onboarding Wizard UI – Multi-step onboarding flow


💬 Communication & Collaboration Pages (UI Only)

Inbox – Messaging UI

Notifications – Notifications layout

Projects – Kanban-style project management UI

Calendar – Event calendar interface

💼 Business Pages

Pricing Page

FAQ Page

Invoice Template (UI)

🧰 Utility Pages

Profile Page

Blank Page Template

404 Page

500 Page

Access Denied Page

🛠️ Technology Stack

Bootstrap 5.3.0

Font Awesome 6.4.0

Chart.js

Inter Font (Google Fonts)

Vanilla JavaScript (ES6+)

Custom CSS with variables

Responsive & mobile-first design

## 🎨 Design Features

### Color Scheme
- **Primary**: Gradient from #667eea to #764ba2
- **Success**: Gradient from #4facfe to #00f2fe
- **Warning**: Gradient from #43e97b to #38f9d7
- **Danger**: Gradient from #fa709a to #fee140
- **Info**: Gradient from #a8edea to #fed6e3

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Modern card design with shadows and rounded corners
- **Buttons**: Gradient buttons with hover effects
- **Tables**: Advanced tables with sorting, filtering, pagination
- **Forms**: Floating labels and modern form styling
- **Modals**: Professional modal dialogs
- **Navigation**: Collapsible sidebar with active states

## 📱 Responsive Design

The template is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Mobile Features
- Collapsible sidebar
- Touch-friendly interface
- Optimized table layouts
- Responsive charts
- Mobile-first CSS approach

## 🔧 Advanced Features

### Table Enhancements
- **Pagination**: Automatic pagination with page info
- **Sorting**: Click-to-sort functionality
- **Filtering**: Real-time search and filter
- **Export**: CSV export functionality
- **Bulk Actions**: Select multiple items for batch operations

### User Experience
- **Breadcrumbs**: Navigation breadcrumbs
- **User Dropdown**: Profile menu with logout
- **Loading States**: Visual feedback for actions
- **Alerts**: Success/error notifications
- **Tooltips**: Helpful tooltips throughout



## 🚀 Getting Started

1. **Download** the template files
2. **Open** `index.html` in your browser
3. **Customize** the content and styling as needed
4. **Integrate** with your backend system
5. **Deploy** to your web server

### Quick Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Admin Panel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
    <!-- Your content here -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>
```

## 📊 Charts & Analytics

The template includes Chart.js integration with:
- **Line Charts**: Sales trends and performance
- **Bar Charts**: Comparative data visualization
- **Doughnut Charts**: Revenue breakdown
- **Mixed Charts**: Combined chart types

### Chart Customization
```javascript
// Example chart configuration
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
```

## 🔐 Security Features

- **Role-based Access Control**: Granular permissions
- **User Authentication**: Login/logout functionality
- **Audit Logging**: Complete activity tracking
- **Input Validation**: Client and server-side validation
- **CSRF Protection**: Cross-site request forgery protection

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Internet Explorer**: Not supported

## 📈 Performance

- **Optimized CSS**: Minimal and efficient styles
- **Compressed Assets**: Minified CSS and JavaScript
- **Lazy Loading**: Images and components load on demand
- **Caching**: Browser caching for static assets
- **CDN**: Content delivery network for libraries

## 🎯 Use Cases

Perfect for:
- **Electronics Retail Admin Panels**
- **E-commerce Admin Panels**
- **CRM Systems**
- **Project Management Tools**
- **Analytics Dashboards**
- **Content Management Systems**
- **Financial Management Systems**
- **Inventory Management**
- **Sales Management**
- **Customer Support Systems**
- **Electronics Store Management**

## 🔄 Customization

### Colors
Modify CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Add your custom colors */
}
```

### Layout
Adjust the sidebar width and main content margin:
```css
.sidebar {
    width: 280px; /* Change sidebar width */
}

.main-content {
    margin-left: 280px; /* Adjust main content margin */
}
```

### Components
Add custom components by extending the existing CSS classes and JavaScript functions.

## 📝 License

This template is available for commercial use. Please check the license terms before using in commercial projects.


**AGPanel** - Professional Admin Dashboard Template
Built with ❤️ for modern web applications
