# Offline & Online Status Indicator

A simple web application that detects and displays the current internet connection status.

## Features

- Real-time connection status detection
- Displays "Online Now" in green when connected
- Displays "Offline Now" in gray when disconnected
- Automatically updates when connection status changes

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - JavaScript functionality for connection detection

## How It Works

The application uses the browser's `navigator.onLine` API and listens to `online` and `offline` events to detect connection status changes.

## Usage

Simply open `index.html` in a web browser. The status indicator will show your current connection state and update automatically when your connection changes.

## Browser Compatibility

Works in all modern browsers that support:

- `navigator.onLine` API
- `online` and `offline` events
