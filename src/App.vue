<template>
  <div
    id="app"
    class="d-flex flex-column h-100"
  >
    <nav
      v-if="loggedIn && showMenuOpenViewer"
      class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4"
    >
      <router-link
        :to="{ name: 'LandingPage'}"
        class="navbar-brand"
      >
        <div class="d-inline-flex align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            style
            width="64px"
            height="38.65px"
            viewBox="-0.5 -0.5 202 122"
            content="&lt;mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;&gt;&lt;diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;&gt;7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==&lt;/diagram&gt;&lt;/mxfile&gt;"
          >
            <defs />
            <g>
              <rect
                x="40"
                y="0"
                width="120"
                height="120"
                rx="18"
                ry="18"
                fill="#41b883"
                stroke="none"
                pointer-events="all"
              />
              <rect
                x="60"
                y="20"
                width="80"
                height="80"
                rx="12"
                ry="12"
                fill="#ffffff"
                stroke="none"
                transform="rotate(-90,100,60)"
                pointer-events="all"
              />
              <rect
                x="33.98"
                y="42.05"
                width="132.04"
                height="5.9"
                rx="0.89"
                ry="0.89"
                fill="#ffffff"
                stroke="none"
                pointer-events="all"
              />
              <rect
                x="33.98"
                y="72.05"
                width="132.04"
                height="5.9"
                rx="0.89"
                ry="0.89"
                fill="#ffffff"
                stroke="none"
                pointer-events="all"
              />
              <path
                d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z"
                fill="none"
                stroke="#ffffff"
                stroke-width="11"
                stroke-miterlimit="10"
                pointer-events="all"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="34.236"
                ry="34.28936714255274"
                fill="none"
                stroke="#ffffff"
                stroke-width="11"
                pointer-events="all"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="22.823999999999998"
                ry="22.85957809503516"
                fill="none"
                stroke="#ffffff"
                stroke-width="11"
                pointer-events="all"
              />
              <path
                d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z"
                fill="none"
                stroke="#2c3e50"
                stroke-width="11"
                stroke-miterlimit="10"
                pointer-events="all"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="30.636"
                ry="30.683997443000216"
                fill="none"
                stroke="#2c3e50"
                stroke-width="11"
                pointer-events="all"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="20.424"
                ry="20.455998295333476"
                fill="none"
                stroke="#2c3e50"
                stroke-width="11"
                pointer-events="all"
              />
            </g>
          </svg>
        </div>
        <h6
          class="d-inline-flex ml-1 font-weight-bolder"
          style="color:#2c3e50;"
        >
          openviewer
        </h6>
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
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNavDropdown"
        class="collapse navbar-collapse justify-content-end align-middle"
      >
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <router-link
              :to="{ name: 'Home'}"
              class="nav-link"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Instances'}"
              class="nav-link"
            >
              Instances
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Images'}"
              class="nav-link"
            >
              Images
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Volumes'}"
              class="nav-link"
            >
              Volumes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'FloatingIPs'}"
              class="nav-link"
            >
              Floating IPs
            </router-link>
          </li>
          <!-- XXX All availability components could be gathered in a dropdown menu -->
          <!-- XXX Segments are only accessible to 'admin' -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'Segments'}"
              class="nav-link"
            >
              Segments
            </router-link>
          </li>
          <!-- XXX Notifications are only accessible to 'admin' -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'Notifications'}"
              class="nav-link"
            >
              Notifications
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Orchestrations'}"
              class="nav-link"
            >
              Orchestrations
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdownMenuLink"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                class="bi bi-folder-fill text-dark"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.828 3h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0113.174 14H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 006.172 2H2.5a1 1 0 00-1 .981l.006.139z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="d-inline ml-2">
                <u>{{ currentProject }}</u>
              </p>
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                v-for="item in projectList"
                :key="item.id"
                class="dropdown-item"
                href="#"
                @click="changeProject(item.id)"
              >{{ item.name }}</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              id="navbarDropdownMenuLink"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                class="bi bi-people-circle pb-1 text-dark"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="d-inline ml-2">
                <u>{{ currentUser }}</u>
              </p>
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              style="left: -50px"
            >
              <router-link
                :to="{ name: ''}"
                class="dropdown-item"
              >
                My Account
              </router-link>
              <router-link
                :to="{ name: 'Logout'}"
                class="dropdown-item"
              >
                Logout
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav
      v-if="loggedInKubernetes && showMenuKubernetes"
      class="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4"
    >
      <router-link
        :to="{ name: 'LandingPage'}"
        class="navbar-brand"
      >
        <div class="d-inline-flex align-middle">
          <svg
            style="width:42px; height:42px;"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            width="42"
            height="42"
          >
            <defs>
              <image
                id="img1"
                width="380"
                height="380"
                href="data:image/png;base64,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"
              />
              <image
                id="img2"
                width="275"
                height="180"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC0CAYAAAC3x8haAAAAAXNSR0IB2cksfwAAE9tJREFUeJztnQ2UVdV1x122K23SpFVrjNbEkKVNTMrKh8aQFF21NbpUSFqbmFQxEVYE0SiiosWPhElMFL+IBQEDfjREoigFxYASYzB8iAoIKPIpyjcDMzADwzDMDLC79zv3zbz3mDdz39x79r7vvv9vrf9aOgNvn73fPX/uOffcc446CgAAAIgbIurBms6qo+jUBZ/Vo0isr7CeZjXEEKsh+KyvKJcMAFAIOSOJw0QKkc/sURBLjKTJQyz5TBgKAJZwJ3zOQ+fO8lxBrKc9xnraqoYAgKMyHbzeYwf/oCBWHEObYjRY1RAAcFSmg3vFKhYAQBnNDq4ZCwCgjGYH14wFAFBGs4NrxgIAKKPZwTVjAQCU0ezgmrEAAMpodnDNWAAAZTQ7uGYsAIAymh1cMxYAQBnNDq4ZCwCgjGYH14wFAFBGs4NrxgIAKKPZwTVjAQCU0ezgmrEAAMpodnDNWAAAZTQ7uGYsAIAy5HdzpA0FsbA5EgBphbBtIwAgDshtKO3j7kQ+85iCWNhQGoA0Q85Q5A5lQwwde0PwWT2KxMJRFwAAAAAAACQHUjz5DgCQUkjx5LsgntrcAukeDwpDBpUN6T5CVXvqQbrHg6oaMgCJhHRPvlNbj0G6JqkWC4DE4rETZCiIpbZSlHRNUi0WAInFYyfIgFjxxgIgsWh2BMSKHguAxKLZERAreiwAEotmR0Cs6LEASCyaHQGxoscCILFodgTEih4LgMSi2REQK3osABKLZkdArOixAEgsmh0BsaLHAiCxaHYExIoeC4DEotkRECt6LAASi2ZHQKzosQBILJodAbGixwLh4LIdzxrIms9azaoJyrmTtYL1Z1Y/63amCs2OgFjRY4HO4XKdxLqE9V6I0i6wbm+q8NsNKqODa8YC+ZDbmKqK9QxrM+pqCOmefOeVSogFHFyWL7N+Rd3f4e406xxSB+nuSJaWzZE2WMWqdLgef8H6WcSaXmSdRyoh3ZPvsG1jxFiVDNfiAta8iPW8zTqPVENKJ9+R/obSWiapFqsS4Rp8hDUyhnpOs84FxAjpH3WhdTyoWqxKgmvQl/VmDDXdwjrdOh8AgDLc8f+SNSoGE8nyQ+ucAADKcMc/gTUnRiN52DonUyi9J99p5pXWGqb29EBux+nkhiRxIatdj7POywxK78l3mnmltYZqsbTh+N/wkNflljmZQ+l9hKqZV1prmMrH0Bz7Ig/5TLLKJzFQehZ3FZ58p5lXWmuYutMDOe5lHnLZQXh6k96l4IhVXrE04JCDPaVyg3YuicRTcdtALMQKE8s3HG64pzRe1Mwj0XgqcBuIhVhhYvmEQ13lMY1ztPJIPB6LnAGxECtMLF9wmC96TGGsRg5lg8dCZ0AsxAoTywcc4uMem7+f1dN3DmWFx2JnQCzEChPLBxxircfmP+i7/WWHx2JnQCzEChMrbvjjf+ux6btYp/psf1niseAZEAuxwsSKE/7on3hu+i98tb2s8Vz0iugIiBU9VlyQ3yc3guw8/w8+2l72eC58RXQExIoeK6Zrua/vNjMT4m53avBdecRCrDCxYriOz2Rt9d1m5uI4250qfFcesRArTKwYruM/+W4vsyzONqcO39VHLMQKEyviNXy777YGjIirzanEd/URC7HCxIpw/X6N3AIyDb4UR5tTi+/qIxZihYkV4fqd4budATPjaG+q8f0NIBZihYnVzWt3iO825jAwantTD6VnY58NhnmltYaJPT2Q//4XyK350EDiHB+lvRUBpXfLQWzbWDpls20j//2nPLatEKwtCQOl9+S7NG8onYbTA3tEuGZ/5KFNnYG1JWGh9J58l+ajLiry9ED+uyfH1JawYG0JAGmEO/cvFY1EqLLOGQAQM9yxP0t+J4U7AtsyApA2uGM/pGwkq61zDg039kOsj7KOY53IOoV1GrnHXjIG7yXOyDqP3MFB/866lNWPNYB1Net61s2s21hVrLtZD7BGsx5hPc56kvUMufHqLNYfWa+y/hxoLmseaz5rAes11kLW64HeIHc6/CLWYtYS1luBlrKWsZaz3ma9Q+6YxHcDrWStki+GtYbc7lfrWO8FWs96n/UBubHwRtamQJvJHd8oL3BtY21nVZM7p0S0k9xju1pyG9bsJndaXH2gPay95OYg9rEaya2WbAp0gNXMamG1sg6yDgU6HFxQh3N+djD4c63B32kOPuNA8Hn7AzUG8RoC7Q3asidoV13Q1t1Bu2sD1QQ57Qzyqw5y3h7kvzXQlqA22TptDGq3Iajj+0Fd1wc1XhdobfAdrA60Kvh+Vgbf1Yrg+3sn+C6XB1oWfM8i+c7l+18cSK6JNwPJdSLXy8JAch0tCCTXllxjcwPJdfdqoNmsaaxJrPGs+8ldy7ewrmVdGfz3QdJlnLVHFIUb15M1iDVTuSgAgNL5jrVn5EHOQIaRuyMAAJQHctd4rLV/ZKD2uxAAQPkx1dpDMpCbxwAAlC/XWPsIjASAdPA5SxM5mtxMNwCgvJlraSR/Q+4RHQCg/KmyNJJq6+wBALHR28pMbrXOHAAQG2/DSAAAcaB/hjC5Je8AgHRxoYWZaG/QAgDwy0vqRhKYyWTrzK3Z03iIqibX07jf77VuCgBx8D0rM9llnbklsxbtp/PvqKYzrt+W0WOzfe6pDIB3TNeW1Flnb0HtnkN0x2/q2kwkV0/+aZ918wDoLv0tzWStdfbaPL+wkc797+oOjSSrqfMbrZsJQKksNjOSwEwWWFdAi227DtKtj+3u1ERy9cIbWqc1AhALV1ibiea5HWY8O6+Ret+8PbSRZPXyWz5OfgAgdp43NZLATO6xroJvavYcopHP1JdsJFnNW3HAOgUAuuJcay8RMxlsXQUtlqxr7paZnHXDNnpzTbN18wEoxlhrH8nADbnQuhKadPcO5exh22n5+zAUkDhk0+5TrX0kA7kd5VOz1mTv/kOd/n7TztZumcmVD9bQqOl7lLIAIDT9rT0kD0rBKthVm1po0OhaOny48z8nv+/KOL5+43YaPGYXjZ+5lxauOkBNzV18KAA23GntHUfAjfqudVWiMPGlhjYjkDuPzujozkTWnNw4YTf978sNtGw9hjKgLKiy9o2iUBkaisxhDBhVm2cMMifSGfL7i366g257oo6mzG2k1VtalFoLQGwMtfaLLiF3ilpZMI6HIMWGKfLUpiNkCf3GLu5cAEg4l1r7RCi4oX2sK9UVi9korri/ptM5j3731dDLS5uo8UBlzXUsXtucEUgtVdYeERpu7PGkfzp7Sfzr8Px3ar46ZBtd9VAtjZmxN7O4rKunOeXEr1/cS68sPXIFbjHT2LrrYKYeVZMr8t3NSuA0a48oCW7wFdYV6wx5YnPduF306OyGTIdq1T4CWhFZuSvm8Iun8/29M9N4YNqezO/EiEDqmGXtDyXDjb7RumrAIdskiDk8OC1/jUsx08gajQhDnlQy2tofSoIb/DXrigGHbJeQNYc5y9uHPJ2ZRt+qHZmfDxpTq91coMP11h5REtzg260rBohaDh6mXkOdafQfVZP3u2KmcfPE3W1GI6YDUon+htFR4AaPsq4YILpu/K42c5B5lCzFTEOGPtmfv/A69mRJKatZn7H2iNBwY//DumKA6K6n6tvMIffpTjHTkOFQ9ucjnsSTnRRjv4dJKRAMxZxc0xg9o33CtZhpyBxK9ufy9AukmnutPSI05M4g3mFdsUrmudfaJ2FveWx328+LmUbuz0Ug9Zxv7ROh4caeY12tSua1lQfajOG/RrZPwhYzDZhJxfEHa48oCW7wUOuKVSrz3203E9nHNgvMBORwnbVHlATBUEx4afH+NmO4eET7iDOMmWDOpGLYxPp7a48IDTe2p3XFyoE1W1poRoyPZP9vfvucybXj2jfFK2Ya8mQHT3Mqkv7WHlES3OAfWlcsKcg7ySs3tdD01xrp7in1ma0dZZc2mSSN843lSa/sazOHe3L2aylmGlhnUrFMtfaHkqEKNBRZifruxhaq39e+aGzYo0ce6OXj8PMHg/dwRFPntZ80WMw0Bj9cSzdN2J25o+lqG0uQKuS9ih7W/lAS3OCTWKk94buwA85e0tRmFv9ya3VmGCP0HbGj7ee9hm7PHILug8vvrckYRh+O17C/vXEytMmaSUNTu8k1t8JBKpjymogVuNG9ravmA3n/5VtVOzIbVGe5veCAczEUOTo0+//fv6cm78/HSe4LfWNeyL/rGcBtlX1cNuzA7nGgjWesvaFbUML3PumILTUHacbrjR3uOC93HLmbTGcP3uqTcwdSqOFP1NGBFn93ArnzIuu2tptGpe0iB0Kz2doXug2VmaEMHO02oL5sZE3ekEH43Zx9eUZxprwLs6ypqJE8Msv/BkR3Tqqj4Y/vbhtaARCCL1j7Qrfhxq+zrp4g+8OO5aHAvqbi/2rLEKWj+Q/hpolHTqh2pG/ctJ1mL/H/lKSl9TAmUEF3+JG1J3QbbvzJrMauMvRNZ3cdQu4wpqsJ1WK6/L4aWrsVdwkg0Yy39oRIkOcJ2bVbWzN3Dh2ZRJbcu44ww5hiE6rFJBOx8ogYgISzwNoPIkMeDeXXsxoi3XUIYYcxHUlODQSgTGiw9oJY4EReLTXzMAdjZYcw3bnrKGUYI5I9Q7L/ffaw7ZkzeAAoM0619oJY4ETekWxk8vBQiFHB439oyJhF2CFMqXcdYYcxWTW3HKYVG1to5JR6em8b1nCAsuQSax+IDHfGq88csm3CD+6vobNuCPei2ZBHdpU8hOnuXUeuskOnQuEJCkgBVdZeEBnujB9jvZHbOeWu4VAnB+3JArHuDGG6c9eRK0EOLs8dQsmyeABSwCJrL4gF7pSfZK3O7bjSYfc0Hukoqz1PnHZlJlkms2HJSte572B+BERiH+tN1t2s6pyfW+xS9WlrL4gF7qw9WdW5nfeye2toS23+OS5T5jZ6GcJkhzHFhjKFZiKEmd8BIIf1rN+wrmOdz/pUbh8gt3/yuax/DP7/BeX2DbTp/R7gDtub1ZTbgbt6iS6uIUyuWWza2Zo3lClmJgB0gZjHeNZA6saSdf47/8zSPBVtuo9+bQZ32osLO3HYl+jC3HmEHcYIz85rzHsqBEAIXmTdQm4N1Yei9gf+jLsU2y7/ap8QRz9ODNxxLy/s6F29RBf2zqNwArWrO4/9zYczczD/Nry6w9+DimcZ637Wd1mfjLsvkBv6LFHM54q4czCHO/c1USdMOzMLmUAtXIvSGVgWD3KQR3hyx3CBRl8gZ1RaTNHISR3u4MPDGoVM1sq+qqUMY/buP5T35AeATpAduO9jfYv1Ee2+wDEfV8pTHqGerp2fCtzJR4YxE1n0Jixa20z9R4Ufxgiya3vfETiEEBzBWtbDrAtYx1j2A47/CdZypbzvtMzVK2wE47sykwGj8s97kWGMHEAVdhjTimEMcEiHfYD1TdbfWl/7uZAzNQ2WWufqFTaD33VmJlc9dOThUTvrD1LV5HoMY0BXfMD6OSnNgUSB2zhMqSbfts7VK2wIM4uZydVjip9Et2DlAbrrqfqivwcVyWrWbaxzrK/rUuE2T1KozyTrPL3CpvFh1oKOzOTHOSfXAVCEWeT+ZS/fPU8DyP/8ieyE2MM6T6+wcZzIWlFoJvImMQAFrGT9D+tSKli6ngYU6jfKOkfvsHmcztqcayZyIh0A1H73cYb1daoBOcP0SR/rHL3DBtKL1SBG8u2f7Wj+41t4e7dC2cCaQG79R7qWgoeE857qsb5vsP7aOkfvsJFcwDpP/ju4qEC6kQVV77PmsO5k/ZP1NZgUuBa/8lj3u63zU4eTXuixoMA/cnspT1lmk7vbuIPcoW3nsE6xvr6SDrk9UXxxnnV+6nDS13osKIgHebdF5jW+Q84oPsc61vraSQNcx+tZWzx8Z69a52YCwVDKgbHW10la4dp+hvWIh+9sgnVuJnDiZ7GGeCgoiI9+1tdJmuH69mXNi/k7+7l1XmaQM5RK3IxElvyuYc0lN9s/ljWd5f/Q4/DIZGoP62sk7XCNf8xaFeP31ts6JzOofW/NR1mbYyyqb+RYQBn/rmDNZ81kTWaNIzfZdivratb3WReyvso6hfVXndTi65SsieonNK+FSoXr/DFyrw/ENZ9ynHVOiYAL8UXWVeRuA79Mbq/NfqyfkNs3Yg7rZXJb8MmmvvIv+rOsp1i/lQ7Amkhuf88x5B7LyW5b95DbNOen5Dr6DazBrAGsy1j/yerDOo91NrmhmLTls6xPs05kHcP6MOtoj/n/HentjxGG/r5yBflwrU8gN0k7P4bvDcNU4CC3V2kS+IB1knU9Kg2u+Rmsh1iLWJtYzd347uZY5wESArm7s3VxuUIEqqxrATLXw7Gsz5ObFpBH99fId8Pa2sF31oTvDeTBF8SnyO8KyjDIxYq7k4Qi3w05U5GhvwzvZfnFx63bBRIKuXmcaWZ2gn/lAEgX5CajlxqYidydpOOISgCAg9zYeYyBoUy0zh0A4AFya1jWKBvK96zzBgB4gDv3yazHFM3kbcKLfwCkF+7gl7BeUTKUX1rnCwDwDHf0K8ktdPLJPlZP61wBAJ7hjn40uZcofc6nYDIWgEqB3LtEsoXiJk+GUnk7fAFQyXCnP441lPVWzGbyvHVuAAAjyC16mx2joZxrnRMAwBA2gV7k3ud4PaKZPGqdCwAgIbAhnMoaRN17CiSvxn/eOgcAQMIgt6r29yUaCtadAAA6htq30lwfwkzetW4vAKAMIDcMks14ZPtLmbztaBPwHtbtBACUIeTWsMgevfLIuY7wAiAAICqBqQyybgeIj/8HpxQ3chquST8AAAAASUVORK5CYII="
              />
            </defs>
            <use
              id="Background"
              href="#img1"
              x="10"
              y="10"
            />
            <use
              id="Final Shark"
              href="#img2"
              x="63"
              y="110"
            />
          </svg>
        </div>
        <h6
          class="d-inline-flex ml-1 font-weight-bolder"
          style="color:#2c3e50;"
        >
          NotSoKinD!
        </h6>
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
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNavDropdown"
        class="collapse navbar-collapse justify-content-end align-middle"
      >
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <router-link
              :to="{ name: 'KHome'}"
              class="nav-link"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Administration'}"
              class="nav-link"
            >
              Administration
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Monitoring'}"
              class="nav-link"
            >
              Monitoring
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Hpa'}"
              class="nav-link"
            >
              HPA
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Workloads'}"
              class="nav-link"
            >
              Workloads
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'Services'}"
              class="nav-link"
            >
              Services
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'LogoutKubernetes'}"
              class="nav-link"
            >
              Logout
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main class="flex-shring-0 mb-4">
      <router-view />
    </main>
    <footer class="footer mt-auto py-3 bg-light text-center">
      <div class="container">
        <div class="text-dark font-weight-bold d-inline mr-5">
          <svg
            class="mr-1"
            width="55.5"
            height="33.51"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            viewBox="-0.5 -0.5 202 122"
            content="<mxfile host=&quot;Electron&quot; modified=&quot;2020-03-26T17:58:34.257Z&quot; agent=&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/12.6.5 Chrome/80.0.3987.86 Electron/8.0.0 Safari/537.36&quot; version=&quot;12.6.5&quot; etag=&quot;8CiPFhoDpVAnhbotMDba&quot; type=&quot;device&quot;><diagram id=&quot;9GIP2xLfhwZL2HaQfGx6&quot;>7ZfBspowFIafhmWZQEBgWa23XbQznXHRdYQImRs4TIgV+/RNIFG44FVH76IzzcKRPyeQfOf3HHTwqmy/ClIXPyCj3PFR1jr4i+P7CQrVpxaOvRDguBdywbJe8s7Chv2hRkRG3bOMNqNACcAlq8diClVFUznSiBBwGIftgI+fWpOcToRNSvhU/cUyWfRq7Edn/RtleWGf7C2SfqYkNticpClIBoeBhNcOXgkA2X8r2xXlmp3l0q97uTB72piglbxlgd8v+E343pzN7Ese7WEF7KuM6njPwctDwSTd1CTVsweVXaUVsuRmmjR1D3zHWr1muWOcr4CD6G6GA28Zx1jpjRTwSu1MBRXVoqWB1IXZGRWSthdP552YKa9RKKkURxViFvhh4ibD0d/AuM4LTRIO5xx6NjHFMH9WJMY3+elJZ7Tqi6E7Txo/mbQASSSDSl1+StCU9K4bl0hP8vQM2jEa842mfOMZvPET6AbX6eYKb33xmKZUkK0NR/ebDbtJPCaQ+C4K0XlEU8NhFRJMoeDQTdBwLB6HFD7Zgnc57iaDBfOEb+ClcD0OaPGvAjJ+wzMF7SN5Rdd5DWjoozHVRL+TLeU/oWGmfG1BSih1UeIs10KqjksVmSXXkUuSvuYd9jfA7P0+m2US6hNb25Y9721byUhTdPlD/UytN1q2uX5RcRk0kctULWhceqRdlR2m+93uZnvYKLcq6y/d0MFQyYHur/A6fFajs79tW3gW4dQJCXL9meqbuMHjToj/O+G6E04Z/0gnqMYx6hv4jTESd6YJRfPWuL8xq8vzy2s3N/gHgNd/AQ==</diagram></mxfile>"
          >
            <defs />
            <g>
              <rect
                x="40"
                y="0"
                width="120"
                height="120"
                rx="18"
                ry="18"
                stroke="none"
                pointer-events="all"
                fill="#343a40"
              />
              <rect
                x="60"
                y="20"
                width="80"
                height="80"
                rx="12"
                ry="12"
                fill="#ffffff"
                stroke="none"
                transform="rotate(-90,100,60)"
                pointer-events="all"
              />
              <rect
                x="33.98"
                y="42.05"
                width="132.04"
                height="5.9"
                rx="0.89"
                ry="0.89"
                fill="#ffffff"
                stroke="none"
                pointer-events="all"
              />
              <rect
                x="33.98"
                y="72.05"
                width="132.04"
                height="5.9"
                rx="0.89"
                ry="0.89"
                fill="#ffffff"
                stroke="none"
                pointer-events="all"
              />
              <path
                d="M 5 59.71 C 28.49 31.39 63.34 15.01 100.1 15.01 C 136.86 15.01 171.71 31.39 195.2 59.71 C 171.71 88.03 136.86 104.41 100.1 104.41 C 63.34 104.41 28.49 88.03 5 59.71 Z"
                fill="none"
                stroke="#ffffff"
                stroke-width="11"
                stroke-miterlimit="10"
                pointer-events="all"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="34.236"
                ry="34.28936714255274"
                fill="none"
                stroke="#ffffff"
                stroke-width="11"
                pointer-events="all"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="22.823999999999998"
                ry="22.85957809503516"
                fill="none"
                stroke="#ffffff"
                stroke-width="11"
                pointer-events="all"
              />
              <path
                d="M 15 59.71 C 36.02 34.37 67.21 19.71 100.1 19.71 C 132.99 19.71 164.18 34.37 185.2 59.71 C 164.18 85.05 132.99 99.71 100.1 99.71 C 67.21 99.71 36.02 85.05 15 59.71 Z"
                fill="none"
                stroke-width="11"
                stroke-miterlimit="10"
                pointer-events="all"
                stroke="#343a40"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="30.636"
                ry="30.683997443000216"
                fill="none"
                stroke-width="11"
                pointer-events="all"
                stroke="#343a40"
              />
              <ellipse
                cx="100.1"
                cy="59.71"
                rx="20.424"
                ry="20.455998295333476"
                fill="none"
                pointer-events="all"
                stroke="#343a40"
                stroke-width="15"
              />
            </g>
          </svg>OpenViewer
        </div>
        <div class="text-dark font-weight-bold d-inline">
          <svg
            class="mr-1"
            style="width:52px; height:52px;"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            width="200"
            height="200"
          >
            <defs>
              <image
                id="img10"
                width="380"
                height="380"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAF8CAMAAAD7OfD4AAAAAXNSR0IB2cksfwAAAo5QTFRFNDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpANDpAF5XnWgAAANp0Uk5TABMnO09jdoqesr/IztXc4unv9v9iThI0VneZuvqYVQdJa4yuz/FqDzhhs/2JYDcFPHu583oIQH+9fj8scve4cSpY5AQ9hMvKgyh91CMeeMml+KTSaRAwA8fGVA7g33Afjo2q/DG1JK3+nPsZlPmTCYL1gQoCXuNc09AgryIRiw2XUOYUWuunOikBbWyrLdqfBiXy7aGdw7YcMy70Q1tZTDXsK+Ua3bGQUULw6M3MMuG0gAtE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"
              />
              <image
                id="img20"
                width="275"
                height="180"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC0CAYAAAC3x8haAAAAAXNSR0IB2cksfwAAFDFJREFUeJztnQuUVNWVhl3OrMwkk8yoY4yOiSFLJzGJK0+DI8iIIgQERXwuhCiIDYiAioqCoA0DKCqKCsKAT9SBEBQURIkKyEOUNz6wAZGWl0QgPJr3a88+dW4V1UVX9a269+x969b/rfWvBdV07bN33fNzz7mnzjnuOAAAACBsiKgOayJrGwVnm/dedbLE+i1rHKsqhFhV3nv9VrhkAIBMyBpJGCaSiXnPOhmxjJHsdRDLvCcMBQBNuBNOctC5k0zKiDXOYaxxWjUEAByX6ODbHXbwNRmxwhjaZKNKq4YAgOMSHdwpWrEAAMJIdnDJWAAAYSQ7uGQsAIAwkh1cMhYAQBjJDi4ZCwAgjGQHl4wFABBGsoNLxgIACCPZwSVjAQCEkezgkrEAAMJIdnDJWAAAYSQ7uGQsAIAwkh1cMhYAQBjJDi4ZCwAgjGQHl4wFABBGsoNLxgIACCPZwSVjAQCEIbebI1VmxMLmSADEFcK2jQCAMCC7obSLuxPznidkxMKG0gDEGbKGYu5QKkPo2JXee9XJEgtHXQAAAAAAABAdSPDkOwBATCHBk++8eGJzCyR7PCgMGZQ2JPsIVeypB8keDypqyABEEpI9+U5sPQbJmqRYLAAii8NOkCAjlthKUZI1SbFYAEQWh50gAWKFGwuAyCLZERAreCwAIotkR0Cs4LEAiCySHQGxgscCILJIdgTECh4LgMgi2REQK3gsACKLZEdArOCxAIgskh0BsYLHAiCySHYExAoeC4DIItkRECt4LAAii2RHQKzgsQCILJIdAbGCxwIgskh2BMQKHgv4g8t2MquMNYdVwdrslfMb1qes91lttNsZKyQ7AmIFjwVyw+U6jdWK9YWP0s7Vbm+scNsNSqODS8YC1SG7MVU5azxrHeqqCMmefOeUUogFLFyW37Aep8J3uDtLO4fYQbI7ksVlc6RKrVilDtfjH1j9Ata0mXYesYRkT77Dto0BY5UyXIsmrNkB69lLO49YQ0In35H8htJSJikWqxThGnyH9VAI9XxNOxcQIiR/1IXU8aBisUoJrkEL1vwQarqedbZ2PgAAYbjj/yPrsRBMJMkN2jkBAIThjn8Ka0aIRjJMOydVKL4n30nmFdcaxvb0QG7H2WSHJGFhVruepJ2XGhTfk+8k84prDcViScPxz3eQ1/WaOalD8X2EKplXXGsYy8fQHLuZg3zGaOUTGSg+i7syT76TzCuuNYzd6YEct7WDXP5GeHoT36XgiFVcsSTgkJ0dpXKbdC6RxFFxUyAWYvmJ5RoOd6+jNN6SzCPSOCpwCsRCLD+xXMKhbnaYRgOpPCKPwyInQCzE8hPLFRzmVw5TGC6RQ9HgsNAJEAux/MRyAYf4vsPm72Gd4zqHosJhsRMgFmL5ieUCDrHSYfOHuG5/0eGw2AkQC7H8xAobfvuXHDZ9K+tMl+0vShwWPAFiIZafWGHCb93XcdMHuGp7UeO46CXRERAreKywILdPbgxm5/n/cNH2osdx4UuiIyBW8FghXcstXLeZGRV2u2OD68ojFmL5iRXCdfx71gbXbWYuDbPdscJ15RELsfzECuE6nu66vczSMNscO1xXH7EQy0+sgNdwb9dt9XggrDbHEtfVRyzE8hMrwPVbl+wCMgl+HUabY4vr6iMWYvmJFeD6fcN1Oz3eDKO9scb1J4BYiOUnVoHXbnfXbUyjLGh7Yw/FZ2OfSsW84lrDyJ4eyL//C7JrPiQwcU4O0t6SgOK75SC2bcyfotm2kX9/rMO2ZYK1JX6g+J58F+cNpeNwemCdANdsBwdtygXWlviF4nvyXZyPuijJ0wP5d08PqS1+wdoSAOIId+6BgkZiKNfOGQAQMtyxf0puJ4VrAtsyAhA3uGMPFTaSCu2cfcON/Rbru6yTWKeyzmCdRfaxlxmDn2eckdWI7MFBLVnXsNqw2rM6sbqx7mT1YpWzBrEeZT3JGsl6jvUyazzZ8epU1rusmaz3Pc1izWbNYc1lfcCax/rQ00dkT4dfwFrIWsRa7GkJaylrGetj1idkj0n8zNNy1ufmg2GtILv71SrWF55Ws75krSE7Fv6KtdbTOrLHN5ovcG1kfc3aRPacEqNvyD6220J2w5q/kz0tbrunHaydZOcgdrF2k10tudfTPtZ+1gHWQdYh1mFPR7wL6kjaa4e8f3fQ+5393nvs895vj6fdXrwqTzu9tuzw2rXNa+vfvXZv8bTZy+kbL79NXs5fe/lv8LTeq02yTl95tav06vilV9fVXo1XeVrpfQYVnj73Pp/l3mf1qff5feJ9lss8LfU+ZyPzmZvPf6Enc03M92SuE3O9zPNkrqO5nsy1Za6xWZ7MdTfT0zTWa6wxrBGsR8hey3ezurBu9P58iGR5WtsjssKNO4fVkfWmcFEAAPlzlbZnVIOsgdxF9o4AAFAcmLvGE7X9IwEdvQsBABQfE7Q9JAHZeQwAQPFyi7aPwEgAiAc/0zSR48nOdAMAiptZmkbyL2Qf0QEAip9yTSPZpJ09ACA06muZSU/tzAEAofExjAQAEAbyZwiTXfIOAIgXTTXMRHqDFgCAW94WNxLPTF7RzlybHTt2Ur+Bg2nEqGe1mwJAGFyrZSZbtTPX5K1p79AfL7uSzq3XMKHnXnxZu0kABEF1bck27ew12LJlK/UpH5AykXS9Mm68dvMAKJR2mmayUjt7ad6YMpUubnpZjUaS1KsTpc5EAiA0FqoZiWcmc7UrIMXGrzfRPfc9kNNE0jVl6jTtJgOQD221zUTy3A41Jkx8nRpc3NS3kST1znsztJsOgB9eVzUSz0we1K6CazZv2UKDhwzN20iSmj13nnYKANRGQ20vMWbSWbsKUixesqwgMzmvQSOavxBfpAaRZbi2jyTghjTVroQkhd6h/Pcll9LHn3yq3XwAMjGbdp+p7SMJyO4oH5u1Jjt35j6Ibu269QWZSfuyLjT0qaeFsgDAN+20PaQaFINVsJ9XrKTOXe+gI0eO5Px35ue1GUe9CxvTLd170MjRz9G8jxbQ3r37hLIAIC/6aHvHMXCjrtauShCeeX5MygjMnUcuarozMWtOevTsTS++PJaWLvtEqNUABKJc2zeyQkVoKGYO46ZOt1YzBjMnkgvz8+ZXXEu97+9P4ydMpBUrVwm1FoDQuF3bL2qF7ClqRYEZgmQbppinNjWxZetWWrt2nXBLAQiVa7R9whfc0ObalaqNRYuX0p9u6pRzzuNP7TvSu9Nn0u49e7SbK8qiJUsTArGlXNsjfMONPZnkT2fPi0bNLq9mHHUvuIjKunSnYSNGJxaX7azK/TSnmBj17As0fcb7x7yezTQ2bvya63FxYjsFEEvO0vaIvOAGt9WuWC7ME5tuPXrSsy+8RAsXL6GDBw9qN8kZZuWuMcuBg4dUez2XaQx5YljiZ8aIQOyYqu0PecONvkO7asBitkkwhvLYk8OrvZ7NNJJGY4QhTyx5Utsf8oIbXFe7YsDyxpS3EmZiNOP92anXc5lGy6tbJ16/pVsP6eYCGbppe0RecIN7a1cMEB04cJDOv/CShJnc1PHWaj/LZhp39+qbMhpjOiCWyG8YHQRu8GPaFQNE3Xv0TN2dmHmUJNlMwwx9kq9Pmfq2RpOBeypYP9H2CN9wY6/QrhggGvDgIykzSX+6k800Zs6ak3q934CHNJoMZNDfwyQfCIaijjUNayZPPf2/qdezmYaZQ0m+3rkb5tJjzmBtj/AN2TOI/6ZdsVLm9SlTU2bSs/f9qdezmUb660Yg9jTW9gnfcGMbaFerlPngw/kpM7n+xqNnpmUzDZhJyfFXbY/IC27w7doVK1XmfPBhykzMPrZJYCYgja7aHpEXBENRYdo776XMpEWr61Kv+zETzJmUDGtZ/67tEb7hxp6jXbFiYOWqL0J9JPvapMkpM+l6+92p17OZhomNpzklSTttj8gLbvAN2hWLCmbXtuUVK2jS5Ddp8KNDqUOnrnTBRX+ke/uU0+7du0OL89L/jUuZyUOPPJ56PZtpYJ1JyTJB2x/yhkrQUMxK1OUVFbR9+47Uaz3ve6DaMMPI7LMSNuZ7OUkzMef/JMlmGl1uu5PuvLdP4o6mtm0sQazYz6qj7Q95wQ0+jRWf7/pnkNkBzUFcyU7bqOnliWGMoeXV16der39RE3r7r+86aU+bdmUJI7nsyuuoqmpX6nUztEnGr9p19PX9+/c7aQcoCoprItbAja6vXTUX3MRDlSuuuZ4qVhw9grlvv4HV7j6MoZijQ5N/b9Pu5sSG1i6wX+izdyXDR46u9rMOnbvSsBGjqPKrtU5ig6JkvLY3FARFfO+Tmli/YSNN5iHB3n3H7jhv7jhShtGsJS1YZA/eutz7Ql1Nuu+B/rSvhvcKCzsvYs1k1RerU6/v3l1au8gB36zT9oWCoSIzlOTQoG37jtWGBoax41+tZhTmJL/pM2dlNRKJDYjMXVGvvuXY+Brkwy+0faFguPGRuNLNo1IzAZrrSYoZotQ0/2FI/xZuLjVo1EzkQPMDBw5gAhUUQgdtTygYbvzprPCehRZIrrsOQ/owprYJ1Wy6oUMn/verj3lvACLECG1PCAQ5npA18wXmzqEmk0iSftfhZxiTbUI1m+7vNyDxiBiAiDNX2w8CQw4NZfRzLwa66zD4HcbUJLOBNQBFQpW2F4QCJzIz38xrO9LTkL6mIt+7jnyGMUbmEWzyzw2btKD3ajhuAoCIc6a2F4QCJ5I4sNdMHh4+fLjWrF8Y80rCLPwOYfK96/A7jEnKLPr6bHkFPTzkCVr95ZqgHyoAGrTS9oHAnFuvYcc/1L9oZLuyLnT+hY2pv48Doe64u3feQ5hC7zrSlRw6ZQpPUEAMKNf2gsCwmXyPNY875ZFk5zR3DbnuUMwCsUKGMIXcdaTLYNZvpA+hzLJ4AGLAAm0vCAU2kx+yPuM7lMPJTmo67I4dO4/J2HRmlxOntZlJkrF/nkAtr2qdOGIUgACY/wnnswaxNqW9vlGhLT/W9oJQYDP5JWtDuqGYA8XNcvZ0/vLqJCdDmOQwJttQJtNMDH7mdwBIwyw4epHVldWY9aP0PkB2/+SGrP/0/j5ZuH1lOr3fAWwm9Vi70g2lti/RhTWESTeLdevWVxvKZDMTAGrBmMcIVhkVsGSdf6ce65Bgeye66NdqsJk0Yx1KNxS/X6IrdAI1m1mYvUDSnwoB4IO3WGZ7O7OG6ltB+wO/x/8Itv0A65Qw+nFkYDNpbQylbtqkbG1foit0ArW2O489e/cm5mCaNG8l+JmCIsIc3PwI62rWD8PuC2SHPosE82kbdg7qsJl09gzF2QRq5lqUXGBZPEjDnK1q7hiaSPQFskYlxZ8lchKHzeQev4ZiJmsfevTxvIYxO6uqqj35ASAH5tDmh1mXsb4j3Rc4Zvj7e9aMeapwtnR+IrCZDPJjKO3KbklUYuGiJYkdxfwOYwyLFi9NPAECIAMz8z+MZRYTnaDZDzj+D1jLhPLuo5mrU9hMhtdmKDd37latGmYYc+Ell/oexhw8iGEMSGA67KOsS1j/qn3tp0PW1CRYop2rU9hMXk5/wpOpTrcee97X5s1bqP+ghzGMAbWxhtWfhOZAgsBtvEuoJpdr5+oUNpTJ2QylS/c7s1bFnL07aPAQoc8AFAkVrF6sBtrXdb5wm8cI1GeMdp5OYTP5Nms26xhD6d7jHoH6giJnKtn/2Yt3z1MPcj9/YnZCrKOdp1PYSE5lLcucQzHfJAYgg+WsJ1jXUMbS9TggUL/HtHN0DhvJ2azKdEO5696+ArUFRUDy7uN32tepBGQN0yXNtXN0DhtJXdZ2Yyitrmu7/93peW/YBuJBJWsU2fUf8VoK7hPOe4LD+n7E+mftHJ3DRtKYdbH5s3dRgXhjFlR9yZrB6sP6pfY1GBW4Fo/nKlxABmnnJw4njc1Fipu9ZJ+yTCN7t3Ef2UPbGrDO0L6+og7ZPVFc0Ug7P3E46S4OCwrCwXy3xcxrXEXWKH7GOlH72okDXEezerP2HdfzZ6Z2bioQDKUYGK59ncQVru1PWCMdfGajtHNTgRP/A6u7g4KC8GijfZ3EGa5vC9bskD+z/tp5qUHWUDbVVqEYsp21gjWL7Gz/cNZE1h7NRmVgJlPraF8jcYdrfCvr8xA/t/raOalBR/fWfIa1LsSiuqaK7Pj3U9Yc1pusV1hPk51s68nqxLqO1ZR1LusM1j/lqMV/UbQmqp+XvBZKFa7z98h+fSCs+ZSTtHOKBFyIX7FuJnsb+Buye222YZmVb2bfiBmsd8huwWc29TX/o/+FNZZlzv18njWa7P6eT5F9LGd223qQ7KY595Pt6LexOrPas1qzrmQ1ZzViXUB2KGba8lPWj1mnsk5gfZt1vMP8/43k9sfwQztXuYLqcK1PITtJOyeEzw3DVGAhu1dpFFjDOk27HqUG1/x3rKGsBay1rP0FfHYztPMAEYHs3dmqsFwhAOXatQCJ6+FE1s/JTguYR/dm17Fy1oYaPrO9+NxANfiC+BG5XUHpB3Ox4u4kopjPhqypmKG/Gd6b5Rff124XiChk53FeU7MT/C8HQLwgOxm9RMFMzN1JPI6oBABYyI6dn1IwlNHauQMAHEB2DcsKYUO5VjtvAIADuHOfznpW0Ew+JnzxD4D4wh3cnJH6npChDNTOFwDgGO7oN5Jd6OSSXaxztHMFADiGO/rxZL9E6XI+BZOxAJQKZL9LZLZQXOvIUEpvhy8AShnu9CexzLGKi0M2k9e1cwMAKEF20du0EA2loXZOAABF2ATOI/t9jg8Dmskz2rkAACICG8KZrI5U2FMg89X4n2vnAACIGGRX1U7J01Cw7gQAUDN0dCvN1T7M5DPt9gIAigCywyCzGY/Z/tJM3ta0CXgd7XYCAIoQsmtYzB695pHzNsIXAAEAQfFMpaN2O0B4/D+FPo/5z6WwcQAAAABJRU5ErkJggg=="
              />
            </defs>
            <use
              id="Background"
              href="#img10"
              x="10"
              y="10"
            />
            <use
              id="Final Shark Grey"
              href="#img20"
              x="63"
              y="110"
            />
          </svg>NotSoKinD!
        </div>
        <p class="text-secondary mb-0 mt-2">
          Project for the Information Technologies Laboratory course.
          <br>Designed to be implemented with OpenStack/Kubernetes software.
        </p>
        <p class="list-unstyled mt-0">
          <small>
            Created by:
            <a href="mailto:2171496@my.ipleiria.pt">João Godinho</a> /
            <a href="mailto:2171051@my.ipleiria.pt">Patrícia Rodrigues</a> /
            <a href="mailto:2171499@my.ipleiria.pt">Ricardo Lopes</a>
          </small>
        </p>
        <small class="d-block text-muted">© 2019-2020</small>
        <small class="d-block mb-3 text-muted">Computer Engineering course - IPLeiria</small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenuKubernetes: false,
      showMenuOpenViewer: false
    }
  },
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
        ? this.$store.state.authentication.projects.find(
          o => o.id === this.$store.state.authentication.idSelectedProject
        ).name
        : ''
    },
    projectList () {
      return this.$store.state.authentication.projects != null
        ? this.$store.state.authentication.projects.filter(o => {
          return o.id !== this.$store.state.authentication.idSelectedProject
        })
        : ''
    },
    loggedInKubernetes () {
      return this.$store.state.k8sauthentication.token !== ''
    }
  },
  updated () {
    this.contextSelection()
  },
  methods: {
    changeProject (id) {
      this.$store.commit(
        'authentication/setLastProjectId',
        this.$store.state.authentication.idSelectedProject
      )
      this.$store.commit('authentication/setIdSelectedProject', id)
      this.$router.push({ name: 'LoginScoped' })
    },
    contextSelection () {
      if (this.$router.currentRoute.name === 'LandingPage' ||
        this.$router.currentRoute.name === 'LoginKubernetes' ||
        this.$router.currentRoute.name === 'LoginUnscoped') {
        this.showMenuKubernetes = false
        this.showMenuOpenViewer = false
      } else {
        if (this.$router.currentRoute.meta.isKubernetes) {
          this.showMenuKubernetes = true
          this.showMenuOpenViewer = false
        } else {
          this.showMenuKubernetes = false
          this.showMenuOpenViewer = true
        }
      }
    }
  }
}
</script>
