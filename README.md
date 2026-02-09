# 💰 Expense Splitter - Progressive Web App (PWA)

A Progressive Web App for splitting expenses with friends. Install it on your Android phone and use it like a native app!

## 🎯 Features

✅ **Email-based Authentication** - Secure login with email and password
✅ **Offline Support** - Works without internet connection
✅ **Install as App** - Add to home screen like a real app
✅ **Track Expenses** - Record who paid and who owes
✅ **Smart Balances** - See who owes what automatically
✅ **Share Data** - Share expenses via code with friends
✅ **Personalized View** - Each user sees their own balances

## 📱 How to Install on Android

### Method 1: Direct Installation (Recommended)

1. **Upload all files to a web server**
   - Upload `index.html`, `manifest.json`, and `service-worker.js` to the same folder
   - Make sure they're accessible via HTTPS (required for PWA)

2. **Open in Chrome**
   - Visit your website URL in Chrome browser
   - You'll see an "Install" prompt at the bottom

3. **Install the App**
   - Tap the "Install" button in the prompt
   - Or tap the menu (⋮) → "Add to Home screen"
   - The app icon will appear on your home screen

4. **Use Like a Real App**
   - Tap the icon to open
   - Works in fullscreen mode
   - Functions even offline

### Method 2: Local Testing (For Development)

1. **Download all files** to your computer
2. **Host locally**:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```
3. **Access on phone**:
   - Connect phone to same WiFi
   - Open `http://YOUR-COMPUTER-IP:8000` in Chrome
   - Follow installation steps above

### Method 3: Using GitHub Pages (Free Hosting)

1. **Create a GitHub repository**
2. **Upload all files** (index.html, manifest.json, service-worker.js)
3. **Enable GitHub Pages** in repository settings
4. **Visit the URL** and install the app

## 🚀 Quick Start Guide

### First Time Setup

1. **Register an Account**
   - Open the app
   - Click "Register" tab
   - Enter your name, email, and password
   - Click "Register"

2. **Add People**
   - Go to "People" tab
   - Add friends who will share expenses
   - They can register their own accounts later

3. **Add Expenses**
   - Go to "Expenses" tab
   - Fill in description, amount, and who paid
   - Select who to split the expense with
   - Click "Add Expense"

4. **Check Balances**
   - "My Balance" tab - Your personal view
   - "All Balances" tab - Everyone's balances
   - See who owes what to whom

5. **Share with Friends**
   - Click "📤 Share Data" button
   - Copy the share code
   - Send via WhatsApp/Email to friends
   - They paste it in "Import" tab

## 📂 File Structure

```
pwa-expense-splitter/
├── index.html          # Main app file
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline functionality
└── README.md          # This file
```

## ⚙️ Technical Details

### PWA Features
- **Manifest**: App metadata, icons, theme colors
- **Service Worker**: Offline caching, background sync
- **Responsive**: Works on all screen sizes
- **Installable**: Can be added to home screen
- **Standalone**: Runs without browser UI

### Browser Requirements
- Chrome 67+ (recommended)
- Edge 79+
- Samsung Internet 7.2+
- Firefox 79+ (limited support)

### Data Storage
- **LocalStorage**: All data stored locally on device
- **No Backend**: Everything runs in the browser
- **Privacy**: Your data never leaves your device
- **Share Codes**: Encrypted data for sharing with friends

## 🔐 Security Notes

- Passwords stored locally (not transmitted)
- Share codes don't include passwords
- HTTPS required for PWA features
- Data stays on your device

## 🎨 Customization

### Change Theme Color
Edit `manifest.json`:
```json
"theme_color": "#5c6ac4",
"background_color": "#667eea"
```

### Change App Name
Edit `manifest.json`:
```json
"name": "Your App Name",
"short_name": "Short Name"
```

### Change Icon
Replace the emoji in the icon SVG data URLs with your own

## 🐛 Troubleshooting

### App Won't Install
- Make sure you're using HTTPS (not HTTP)
- Clear browser cache and reload
- Check that manifest.json is in the same folder

### Offline Not Working
- First load requires internet
- Service worker needs to install first
- Check browser console for errors

### Data Not Saving
- Check browser LocalStorage isn't disabled
- Make sure you have storage space
- Don't use incognito/private mode

## 📊 Usage Tips

1. **Regular Settlements**: Check balances weekly and settle up
2. **Clear Descriptions**: Use detailed expense descriptions
3. **Backup Data**: Export share code as backup
4. **Group Trips**: Perfect for splitting vacation costs
5. **Roommate Expenses**: Track monthly shared bills

## 🤝 Sharing with Friends

### Best Practices
1. All friends should register their own accounts
2. One person creates the group and adds expenses
3. They share the data code with everyone
4. Everyone imports the code to stay synced
5. Anyone can add new expenses
6. Re-share code after major updates

## 📝 Future Enhancements

- [ ] Real-time sync between devices
- [ ] Photo receipts
- [ ] Multiple currencies
- [ ] Expense categories
- [ ] Monthly reports
- [ ] Export to PDF
- [ ] Push notifications
- [ ] QR code sharing

## 💡 Pro Tips

- **Backup Regularly**: Generate share code monthly as backup
- **Name Conventions**: Use clear expense descriptions
- **Quick Add**: Swipe gestures for faster entry (future feature)
- **Split Types**: Equal splits for simplicity
- **Settlement**: Use app's suggested settlements

## 🆘 Support

For issues or questions:
1. Check this README first
2. Review troubleshooting section
3. Check browser console for errors
4. Verify all files are uploaded correctly

## 📄 License

Free to use and modify for personal use.

---

**Made with ❤️ for easier expense splitting**

*Version 1.0.0 - PWA Edition*
