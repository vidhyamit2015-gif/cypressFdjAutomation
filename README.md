# Cypress Automation Project

This project contains **UI and API automation tests** implemented using Cypress.

It covers:

* UI automation for contact list application
* API automation for PokemonAPI
* Cross-browser and responsive testing
* Reporting with screenshots, videos, and HTML reports

##  Project Setup

### Clone the Repository

```bash
git clone https://github.com/vidhyamit2015-gif/cypressFdjAutomation.git
cd cypressFdjAutomation
```

##  Prerequisites (First-Time Setup)

### Install Node.js

Download and install Node.js (LTS version recommended):

[https://nodejs.org/](https://nodejs.org/)

Verify installation:

```bash
node -v
npm -v
```

### Install Project Dependencies

```bash
npm install
```

This will install Cypress and all required dependencies.

### Verify Cypress Installation

```bash
npx cypress verify
```
###  Recommended Tools

* Visual Studio Code
* Chrome browser
* Firefox browser

## Running Tests

### UI Tests (Desktop - Chrome)

```bash
npm run test:ui:desktop:chrome
```
### UI Tests (Mobile View)

Configured viewport:

* Width: 375
* Height: 667

(Use existing scripts or update config if needed)

###  API Tests

```bash
npm run test:api
```

### Open Cypress Test Runner (Interactive Mode)

```bash
npx cypress open
```
## Test Coverage

###  UI Automation

Tested on: [https://thinking-tester-contact-list.herokuapp.com/](https://thinking-tester-contact-list.herokuapp.com/)

Features covered:

* User Sign Up
* Login
* Adding 5 new users and logging in with each
* Editing address details
* Deleting contact
* Returning to contact list

Additional:

* Edge cases included for better coverage

### 🔹 API Automation

Base URL:
 [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2)

Endpoints tested:

* `GET /pokemon` → Pokemon list validation
* `GET /pokemon/{id}` → Pokemon details validation

Tested IDs:

* 1
* 15
* 25

## Cross-Browser & Responsive Testing

Supported browsers:

* Chrome
* Firefox

Viewports:

* Desktop → 1280 x 800
* Mobile → 375 x 667

## Reports

### Generate Reports

```bash
npm run test:report
```

### Open HTML Report

```bash
npm run report:open
```

### Output Locations

* Screenshots → `cypress/screenshots`
* Videos → `cypress/videos`
* Reports → `cypress/reports`
