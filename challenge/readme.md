# Migrating a Site with Custom Fonts, jQuery, and jQuery Widgets

## Challenge

In this challenge, you will take one of your existing projects (either from Week 11 or Week 12) and enhance it by incorporating **custom fonts, jQuery functionalities, and jQuery UI Widgets**. Additionally, you will ensure the site is responsive and visually appealing using Bootstrap. The final project should be deployed using **GitHub Pages** for accessibility.

## Key Learnings

By completing this exercise, you will:

- Gain hands-on experience in using **custom web fonts** for styling and branding.
- Learn how to integrate **jQuery** for dynamic interactions.
- Explore **jQuery UI Widgets** to enhance user experience.
- Utilize Bootstrap’s grid system and components for a **clean and responsive design**.
- Deploy a fully functional project using **GitHub Pages**.

## User Story

As a developer, I want to enhance my existing website by integrating custom fonts, jQuery, and jQuery UI Widgets so that I can improve both the visual appeal and user experience while keeping the site maintainable and responsive.

## Acceptance Criteria

- Take an existing site from Week 11 or Week 12 and **apply custom fonts** (Google Fonts or locally hosted fonts).
- Integrate **jQuery functionalities** to add interactive elements such as animations, event listeners, or AJAX requests.
- Use **at least two jQuery UI Widgets**, such as Accordions, Datepickers, or Dialogs, to enhance usability.
- Maintain a **clean and responsive layout** using Bootstrap’s grid system.
- Replace at least **three UI elements** with Bootstrap components (e.g., Navbar, Cards, Modals, Forms).
- Deploy the final site using **GitHub Pages** and ensure it works across different screen sizes.

## Getting Started

### 1. Choose an Existing Site
   - Select a project from Week 11 or Week 12 that you will improve with the required features.

### 2. Add Bootstrap and jQuery
   - Include Bootstrap and jQuery in your HTML file inside the `<head>` section:
     ```html
     <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
     <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" />
     ```

### 3. Implement Custom Fonts
   - Use Google Fonts by adding this inside `<head>`:
     ```html
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
     ```
   - Apply the font in your CSS:
     ```css
     body {
       font-family: 'Poppins', sans-serif;
     }
     ```

### 4. Add jQuery Functionalities
   - Example: Fade in/out effect for a section
     ```html
     <button id="toggleSection">Toggle Section</button>
     <div id="content" style="display:none;">This is a hidden section.</div>
     <script>
       $(document).ready(function() {
         $('#toggleSection').click(function() {
           $('#content').fadeToggle();
         });
       });
     </script>
     ```

### 5. Integrate jQuery UI Widgets
   - Example: Adding a Datepicker to a form input
     ```html
     <label for="date">Select a date:</label>
     <input type="text" id="date" />
     <script>
       $(function() {
         $('#date').datepicker();
       });
     </script>
     ```

### 6. Use Bootstrap Components
   - Example: Replace a simple navigation bar with Bootstrap's Navbar
     ```html
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <a class="navbar-brand" href="#">My Site</a>
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
           <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
           <li class="nav-item"><a class="nav-link" href="#">About</a></li>
         </ul>
       </div>
     </nav>
     ```

### 7. Deploy the Site
   - Push your project to GitHub and enable **GitHub Pages** for deployment.
   - Ensure the site is fully functional and accessible online.

## Example Website

For reference, check out this example website that follows the challenge requirements:
- **Demo:** [https://example-bootstrap-jquery.github.io](https://example-bootstrap-jquery.github.io)
- **GitHub Repo:** [https://github.com/example-bootstrap-jquery](https://github.com/example-bootstrap-jquery)

## Submission

Once your site has been enhanced and deployed, submit the following:
- The **GitHub Repository** link.
- The **GitHub Pages** deployed site link.

## Additional Resources

- [Google Fonts](https://fonts.google.com/)
- [jQuery UI Widgets](https://api.jqueryui.com/category/widgets/)
- [Bootstrap Components](https://getbootstrap.com/docs/4.5/components/)
- [GitHub Pages Guide](https://docs.github.com/en/pages/getting-started-with-github-pages)