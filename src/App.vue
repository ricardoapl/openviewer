<template>
 <div id="app" class="d-flex flex-column h-100">
   <span v-if="false">
     <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4" v-if="loggedIn">
      <router-link v-bind:to="{ name: 'Home'}" class="navbar-brand">
        <div class="d-inline-flex align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="" width="64px" height="38.65px" viewBox="-0.5 -0.5 202 122" content="&lt;mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;&gt;7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==&lt;/diagram&gt;&lt;/mxfile&gt;"><defs/><g><rect x="40" y="0" width="120" height="120" rx="18" ry="18" fill="#41b883" stroke="none" pointer-events="all"/><rect x="60" y="20" width="80" height="80" rx="12" ry="12" fill="#ffffff" stroke="none" transform="rotate(-90,100,60)" pointer-events="all"/><rect x="33.98" y="42.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="33.98" y="72.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"/><path d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z" fill="none" stroke="#ffffff" stroke-width="11" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="34.236" ry="34.28936714255274" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="22.823999999999998" ry="22.85957809503516" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"/><path d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z" fill="none" stroke="#2c3e50" stroke-width="11" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="30.636" ry="30.683997443000216" fill="none" stroke="#2c3e50" stroke-width="11" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="20.424" ry="20.455998295333476" fill="none" stroke="#2c3e50" stroke-width="11" pointer-events="all"/></g></svg>
        </div>
        <h6 class="d-inline-flex ml-1 font-weight-bolder" style="color:#2c3e50;">openviewer</h6>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end align-middle" id="navbarNavDropdown">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <router-link :to="{ name: 'Home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Instances'}" class="nav-link">Instances</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Images'}" class="nav-link">Images</router-link>
          </li>
           <li class="nav-item">
            <router-link :to="{ name: 'Volumes'}" class="nav-link">Volumes</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'FloatingIPs'}" class="nav-link">Floating IPs</router-link>
          </li>
          <!-- XXX All availability components could be gathered in a dropdown menu -->
          <!-- XXX Segments are only accessible to 'admin' -->
          <li class="nav-item">
            <router-link :to="{ name: 'Segments'}" class="nav-link">Segments</router-link>
          </li>
          <!-- XXX Notifications are only accessible to 'admin' -->
          <li class="nav-item">
            <router-link :to="{ name: 'Notifications'}" class="nav-link">Notifications</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Orchestrations'}" class="nav-link">Orchestrations</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
             <svg class="bi bi-folder-fill text-dark" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M9.828 3h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0113.174 14H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 006.172 2H2.5a1 1 0 00-1 .981l.006.139z" clip-rule="evenodd"/>
              </svg>
              <p class="d-inline ml-2"><u>{{currentProject}}</u></p>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a
                class="dropdown-item"
                href="#"
                v-for="item in projectList"
                v-bind:key="item.id"
                @click="changeProject(item.id)"
              >
               {{ item.name }}
              </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg class="bi bi-people-circle pb-1 text-dark" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
                <path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clip-rule="evenodd"/>
              </svg>
              <p class="d-inline ml-2"><u>{{currentUser}}</u></p>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style="left: -50px">
              <router-link :to="{ name: ''}" class="dropdown-item">My Account</router-link>
              <router-link :to="{ name: 'Logout'}" class="dropdown-item">Logout</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <main class="flex-shring-0 mb-4">
      <router-view></router-view>
    </main>
    <footer class="footer mt-auto py-3 bg-light text-center">
      <div class="container">
        <p class="text-dark font-weight-bold">
          <svg width="55.5" height="33.51" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 202 122" content="<mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;><diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;>7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==</diagram></mxfile>"><defs></defs><g><rect x="40" y="0" width="120" height="120" rx="18" ry="18" stroke="none" pointer-events="all" fill="#343a40"></rect><rect x="60" y="20" width="80" height="80" rx="12" ry="12" fill="#ffffff" stroke="none" transform="rotate(-90,100,60)" pointer-events="all"></rect><rect x="33.98" y="42.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"></rect><rect x="33.98" y="72.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"></rect><path d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z" fill="none" stroke="#ffffff" stroke-width="11" stroke-miterlimit="10" pointer-events="all"></path><ellipse cx="100.1" cy="59.71" rx="34.236" ry="34.28936714255274" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"></ellipse><ellipse cx="100.1" cy="59.71" rx="22.823999999999998" ry="22.85957809503516" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"></ellipse><path d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z" fill="none" stroke-width="11" stroke-miterlimit="10" pointer-events="all" stroke="#343a40"></path><ellipse cx="100.1" cy="59.71" rx="30.636" ry="30.683997443000216" fill="none" stroke-width="11" pointer-events="all" stroke="#343a40"></ellipse><ellipse cx="100.1" cy="59.71" rx="20.424" ry="20.455998295333476" fill="none" pointer-events="all" stroke="#343a40" stroke-width="15"></ellipse></g></svg>OpenViewer
        </p>
        <p class="text-secondary mb-0">
          Project for the Information Technologies Laboratory course. <br>
          Designed to be implemented with OpenStack software.
        </p>
        <p class="list-unstyled mt-0">
          <small>
            Created by:
            <a href="mailto:2171496@my.ipleiria.pt">João Godinho</a> /
            <a href="mailto:2171499@my.ipleiria.pt">Ricardo Lopes</a>
          </small>
        </p>
        <small class="d-block text-muted">© 2019-2020</small>
        <small class="d-block mb-3 text-muted">Computer Engineering course - IPLeiria</small>
      </div>
    </footer>
   </span>
   <span v-else>
     <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4" v-if="loggedIn"> -->
     <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
      <router-link v-bind:to="{ name: 'KHome'}" class="navbar-brand">
        <div class="d-inline-flex align-middle">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="" width="64px" height="38.65px" viewBox="-0.5 -0.5 202 122" content="&lt;mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;&gt;7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==&lt;/diagram&gt;&lt;/mxfile&gt;"><defs/><g><rect x="40" y="0" width="120" height="120" rx="18" ry="18" fill="#41b883" stroke="none" pointer-events="all"/><rect x="60" y="20" width="80" height="80" rx="12" ry="12" fill="#ffffff" stroke="none" transform="rotate(-90,100,60)" pointer-events="all"/><rect x="33.98" y="42.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"/><rect x="33.98" y="72.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"/><path d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z" fill="none" stroke="#ffffff" stroke-width="11" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="34.236" ry="34.28936714255274" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="22.823999999999998" ry="22.85957809503516" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"/><path d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z" fill="none" stroke="#2c3e50" stroke-width="11" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="30.636" ry="30.683997443000216" fill="none" stroke="#2c3e50" stroke-width="11" pointer-events="all"/><ellipse cx="100.1" cy="59.71" rx="20.424" ry="20.455998295333476" fill="none" stroke="#2c3e50" stroke-width="11" pointer-events="all"/></g></svg>
        </div>
        <h6 class="d-inline-flex ml-1 font-weight-bolder" style="color:#2c3e50;">openkube</h6>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end align-middle" id="navbarNavDropdown">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <router-link :to="{ name: 'KHome'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Administration'}" class="nav-link">Administration</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Workloads'}" class="nav-link">Workloads</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Services'}" class="nav-link">Services</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main class="flex-shring-0 mb-4">
      <router-view></router-view>
    </main>
    <footer class="footer mt-auto py-3 bg-light text-center">
      <div class="container">
        <p class="text-dark font-weight-bold">
          <svg width="55.5" height="33.51" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="-0.5 -0.5 202 122" content="<mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;><diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;>7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==</diagram></mxfile>"><defs></defs><g><rect x="40" y="0" width="120" height="120" rx="18" ry="18" stroke="none" pointer-events="all" fill="#343a40"></rect><rect x="60" y="20" width="80" height="80" rx="12" ry="12" fill="#ffffff" stroke="none" transform="rotate(-90,100,60)" pointer-events="all"></rect><rect x="33.98" y="42.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"></rect><rect x="33.98" y="72.05" width="132.04" height="5.9" rx="0.89" ry="0.89" fill="#ffffff" stroke="none" pointer-events="all"></rect><path d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z" fill="none" stroke="#ffffff" stroke-width="11" stroke-miterlimit="10" pointer-events="all"></path><ellipse cx="100.1" cy="59.71" rx="34.236" ry="34.28936714255274" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"></ellipse><ellipse cx="100.1" cy="59.71" rx="22.823999999999998" ry="22.85957809503516" fill="none" stroke="#ffffff" stroke-width="11" pointer-events="all"></ellipse><path d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z" fill="none" stroke-width="11" stroke-miterlimit="10" pointer-events="all" stroke="#343a40"></path><ellipse cx="100.1" cy="59.71" rx="30.636" ry="30.683997443000216" fill="none" stroke-width="11" pointer-events="all" stroke="#343a40"></ellipse><ellipse cx="100.1" cy="59.71" rx="20.424" ry="20.455998295333476" fill="none" pointer-events="all" stroke="#343a40" stroke-width="15"></ellipse></g></svg>OpenViewer
        </p>
        <p class="text-secondary mb-0">
          Project for the Information Technologies Laboratory course. <br>
          Designed to be implemented with OpenStack/Kubernetes software.
        </p>
        <p class="list-unstyled mt-0">
          <small>
            Created by:
            <a href="mailto:2171496@my.ipleiria.pt">João Godinho</a> /
            <a href="mailto:2171499@my.ipleiria.pt">Ricardo Lopes</a> /
            <a href="mailto:2171051@my.ipleiria.pt">Patrícia Rodrigues</a>
          </small>
        </p>
        <small class="d-block text-muted">© 2019-2020</small>
        <small class="d-block mb-3 text-muted">Computer Engineering course - IPLeiria</small>
      </div>
    </footer>
   </span>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn () {
      return this.$store.state.authentication.tokenScoped !== ''
    },
    currentUser () {
      return this.$store.state.authentication.user != null
        ? this.$store.state.authentication.user.name
        : ''
    },
    currentProject () {
      return this.$store.state.authentication.projects != null
        ? this.$store.state.authentication.projects.find(o => o.id === this.$store.state.authentication.idSelectedProject).name
        : ''
    },
    projectList () {
      return this.$store.state.authentication.projects != null
        ? this.$store.state.authentication.projects.filter(o => { return o.id !== this.$store.state.authentication.idSelectedProject })
        : ''
    }
  },
  methods: {
    changeProject (id) {
      this.$store.commit('authentication/setLastProjectId', this.$store.state.authentication.idSelectedProject)
      this.$store.commit('authentication/setIdSelectedProject', id)
      this.$router.push({ name: 'LoginScoped' })
    }
  },
  mounted () {}
}
</script>
