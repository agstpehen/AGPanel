// Main JavaScript for Admin Panel

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize tooltips
    initTooltips();
    
    // Initialize charts if any chart canvas exists (dashboard or charts page)
    if (
        document.getElementById('salesChart') ||
        document.getElementById('revenueChart') ||
        document.getElementById('customersChart')
    ) {
        initCharts();
    }
    
    // Initialize data tables
    initDataTables();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize user dropdown
    initUserDropdown();
    
    // Initialize advanced tables
    initAdvancedTables();
    
    // Initialize breadcrumbs
    initBreadcrumbs();
}

// Mobile Menu Toggle
function initMobileMenu() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sidebar.classList.toggle('show');
            if (overlay) {
                overlay.classList.toggle('show');
            }
            // Toggle hamburger icon
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
            const icon = sidebarToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('show');
                if (overlay) {
                    overlay.classList.remove('show');
                }
                const icon = sidebarToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
    
    // Close sidebar when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('show');
            if (overlay) {
                overlay.classList.remove('show');
            }
            const icon = sidebarToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Initialize Bootstrap tooltips
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Chart.js Charts
function initCharts() {
    // Sales Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Sales',
                    data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 32000, 29000, 35000, 31000, 38000],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'doughnut',
            data: {
                labels: ['Online', 'In-Store', 'Mobile', 'Other'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: [
                        '#667eea',
                        '#f093fb',
                        '#4facfe',
                        '#43e97b'
                    ],
                    borderWidth: 0,
                    cutout: '70%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }
    
    // Customers Chart
    const customersCtx = document.getElementById('customersChart');
    if (customersCtx) {
        new Chart(customersCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'New Customers',
                    data: [65, 78, 90, 81, 95, 105],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderRadius: 8,
                    borderSkipped: false,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// Data Tables
function initDataTables() {
    const tables = document.querySelectorAll('.data-table');
    tables.forEach(table => {
        // Add search functionality
        addTableSearch(table);
        // Add sorting functionality
        addTableSorting(table);
    });
}

function addTableSearch(table) {
    const searchInput = table.parentElement.querySelector('.table-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const filter = this.value.toLowerCase();
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }
}

function addTableSorting(table) {
    const headers = table.querySelectorAll('th[data-sort]');
    headers.forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const column = this.dataset.sort;
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            
            const isAscending = this.classList.contains('sort-asc');
            
            // Remove all sort classes
            headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
            
            // Add appropriate sort class
            this.classList.add(isAscending ? 'sort-desc' : 'sort-asc');
            
            rows.sort((a, b) => {
                const aVal = a.querySelector(`td:nth-child(${column})`).textContent.trim();
                const bVal = b.querySelector(`td:nth-child(${column})`).textContent.trim();
                
                if (isAscending) {
                    return bVal.localeCompare(aVal);
                } else {
                    return aVal.localeCompare(bVal);
                }
            });
            
            rows.forEach(row => tbody.appendChild(row));
        });
    });
}

// Form Validation
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });
}

// Utility Functions
function showAlert(message, type = 'success') {
    const alertContainer = document.getElementById('alertContainer') || createAlertContainer();
    
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show`;
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    alertContainer.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

function createAlertContainer() {
    const container = document.createElement('div');
    container.id = 'alertContainer';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
}

// Loading States
function showLoading(element) {
    const originalContent = element.innerHTML;
    element.innerHTML = '<span class="spinner"></span> Loading...';
    element.disabled = true;
    
    return function hideLoading() {
        element.innerHTML = originalContent;
        element.disabled = false;
    };
}

// Modal Functions
function openModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

function closeModal(modalId) {
    const modal = bootstrap.Modal.getInstance(document.getElementById(modalId));
    if (modal) {
        modal.hide();
    }
}

// Discount Approval Functions
function approveDiscount(id) {
    const hideLoading = showLoading(event.target);
    
    // Simulate API call
    setTimeout(() => {
        hideLoading();
        showAlert('Discount approved successfully!', 'success');
        updateDiscountStatus(id, 'approved');
    }, 1000);
}

function rejectDiscount(id) {
    const hideLoading = showLoading(event.target);
    
    // Simulate API call
    setTimeout(() => {
        hideLoading();
        showAlert('Discount rejected successfully!', 'info');
        updateDiscountStatus(id, 'rejected');
    }, 1000);
}

function updateDiscountStatus(id, status) {
    const row = document.querySelector(`[data-id="${id}"]`);
    if (row) {
        const statusCell = row.querySelector('.discount-status');
        const actionCell = row.querySelector('.discount-actions');
        
        statusCell.innerHTML = `<span class="badge badge-${status}">${status}</span>`;
        actionCell.innerHTML = `<span class="text-muted">Completed</span>`;
    }
}

// User Dropdown Functionality
function initUserDropdown() {
    const userProfile = document.querySelector('.user-profile');
    const userDropdown = document.querySelector('.user-dropdown');
    
    if (userProfile && userDropdown) {
        userProfile.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userProfile.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
        
        // Handle logout
        const logoutBtn = userDropdown.querySelector('[data-action="logout"]');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    window.location.href = 'login.html';
                }
            });
        }
    }
}

// Advanced Tables with Pagination, Filtering, and Export
function initAdvancedTables() {
    const advancedTables = document.querySelectorAll('.table-advanced');
    
    advancedTables.forEach(table => {
        // Add pagination
        addPagination(table);
        
        // Add advanced filtering
        addAdvancedFilters(table);
        
        // Add export functionality
        addExportButtons(table);
        
        // Add bulk actions
        addBulkActions(table);
    });
}

function addPagination(table) {
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    const rowsPerPage = 10;
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    
    if (totalPages <= 1) return;
    
    // Create pagination wrapper
    const paginationWrapper = document.createElement('div');
    paginationWrapper.className = 'pagination-wrapper';
    
    // Create pagination controls
    const pagination = document.createElement('div');
    pagination.className = 'd-flex justify-content-between align-items-center';
    
    // Page info
    const pageInfo = document.createElement('div');
    pageInfo.className = 'text-muted';
    pageInfo.innerHTML = `Showing <span class="page-start">1</span> to <span class="page-end">${Math.min(rowsPerPage, rows.length)}</span> of <span class="total-rows">${rows.length}</span> entries`;
    
    // Pagination buttons
    const paginationButtons = document.createElement('div');
    paginationButtons.className = 'btn-group';
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn-outline-secondary btn-sm';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = true;
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-outline-secondary btn-sm';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    paginationButtons.appendChild(prevBtn);
    paginationButtons.appendChild(nextBtn);
    
    pagination.appendChild(pageInfo);
    pagination.appendChild(paginationButtons);
    paginationWrapper.appendChild(pagination);
    
    // Insert pagination after table
    table.parentNode.insertBefore(paginationWrapper, table.nextSibling);
    
    let currentPage = 1;
    
    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        
        rows.forEach((row, index) => {
            row.style.display = (index >= start && index < end) ? '' : 'none';
        });
        
        // Update page info
        pageInfo.querySelector('.page-start').textContent = start + 1;
        pageInfo.querySelector('.page-end').textContent = Math.min(end, rows.length);
        
        // Update button states
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
        
        currentPage = page;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) showPage(currentPage + 1);
    });
    
    // Show first page
    showPage(1);
}

function addAdvancedFilters(table) {
    const filtersContainer = table.querySelector('.table-filters');
    if (!filtersContainer) return;
    
    const filterInputs = filtersContainer.querySelectorAll('input, select');
    
    filterInputs.forEach(input => {
        input.addEventListener('input', function() {
            const filterValue = this.value.toLowerCase();
            const columnIndex = this.dataset.column;
            const rows = table.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                if (columnIndex) {
                    const cell = row.querySelector(`td:nth-child(${columnIndex})`);
                    const cellText = cell ? cell.textContent.toLowerCase() : '';
                    row.style.display = cellText.includes(filterValue) ? '' : 'none';
                } else {
                    const rowText = row.textContent.toLowerCase();
                    row.style.display = rowText.includes(filterValue) ? '' : 'none';
                }
            });
        });
    });
}

function addExportButtons(table) {
    const exportContainer = table.querySelector('.export-buttons');
    if (!exportContainer) return;
    
    const exportBtns = exportContainer.querySelectorAll('.export-btn');
    
    exportBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const format = this.dataset.format;
            exportTable(table, format);
        });
    });
}

function exportTable(table, format) {
    const rows = Array.from(table.querySelectorAll('tbody tr:not([style*="display: none"])'));
    const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
    
    let csvContent = headers.join(',') + '\n';
    
    rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(td => {
            let text = td.textContent.trim();
            // Escape commas and quotes
            if (text.includes(',') || text.includes('"')) {
                text = '"' + text.replace(/"/g, '""') + '"';
            }
            return text;
        });
        csvContent += cells.join(',') + '\n';
    });
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `export_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showAlert('Export completed successfully!', 'success');
}

function addBulkActions(table) {
    const bulkActionsContainer = table.querySelector('.bulk-actions');
    if (!bulkActionsContainer) return;
    
    // Add select all checkbox to header
    const headerRow = table.querySelector('thead tr');
    const selectAllCell = document.createElement('th');
    selectAllCell.innerHTML = '<input type="checkbox" class="form-check-input" id="selectAll">';
    headerRow.insertBefore(selectAllCell, headerRow.firstChild);
    
    // Add checkboxes to each row
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const checkboxCell = document.createElement('td');
        checkboxCell.innerHTML = '<input type="checkbox" class="form-check-input row-checkbox">';
        row.insertBefore(checkboxCell, row.firstChild);
    });
    
    const selectAllCheckbox = document.getElementById('selectAll');
    const rowCheckboxes = table.querySelectorAll('.row-checkbox');
    
    selectAllCheckbox.addEventListener('change', function() {
        rowCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
        updateBulkActions();
    });
    
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateBulkActions);
    });
    
    function updateBulkActions() {
        const checkedBoxes = table.querySelectorAll('.row-checkbox:checked');
        const bulkActions = bulkActionsContainer.querySelectorAll('.btn');
        
        bulkActions.forEach(btn => {
            btn.disabled = checkedBoxes.length === 0;
        });
        
        if (checkedBoxes.length > 0) {
            bulkActionsContainer.style.display = 'block';
        } else {
            bulkActionsContainer.style.display = 'none';
        }
    }
}

// Breadcrumb Navigation
function initBreadcrumbs() {
    const breadcrumbContainer = document.querySelector('.breadcrumb-container');
    if (!breadcrumbContainer) return;
    
    // Generate breadcrumbs based on current page
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const breadcrumbMap = {
        'dashboard': ['Dashboard'],
        'users': ['Dashboard', 'User Management'],
        'roles': ['Dashboard', 'Role Management'],
        'master-data': ['Dashboard', 'Master Data'],
        'sales': ['Dashboard', 'Sales & Transactions'],
        'inventory': ['Dashboard', 'Inventory Management'],
        'reports': ['Dashboard', 'Reports & Analytics'],
        'settings': ['Dashboard', 'Settings'],
        'logs': ['Dashboard', 'Audit Logs'],
        'charts': ['Dashboard', 'Charts'],
        'tables': ['Dashboard', 'Tables'],
        'forms': ['Dashboard', 'Forms'],
        'activity': ['Dashboard', 'Activity'],
        'file-manager': ['Dashboard', 'File Manager'],
        'onboarding': ['Dashboard', 'Onboarding'],
        'inbox': ['Dashboard', 'Inbox'],
        'notifications': ['Dashboard', 'Notifications'],
        'projects': ['Dashboard', 'Projects'],
        'pricing': ['Dashboard', 'Pricing'],
        'faq': ['Dashboard', 'FAQ'],
        'invoice': ['Dashboard', 'Invoice']
    };
    
    const breadcrumbs = breadcrumbMap[currentPage] || ['Dashboard'];
    
    const breadcrumbHTML = breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        const href = isLast ? '#' : (index === 0 ? 'dashboard.html' : '#');
        
        return `
            <li class="breadcrumb-item ${isLast ? 'active' : ''}">
                ${isLast ? crumb : `<a href="${href}">${crumb}</a>`}
            </li>
        `;
    }).join('');
    
    breadcrumbContainer.innerHTML = `
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                ${breadcrumbHTML}
            </ol>
        </nav>
    `;
}

// Export functions for global access
window.adminPanel = {
    showAlert,
    showLoading,
    openModal,
    closeModal,
    approveDiscount,
    rejectDiscount,
    exportTable
};
