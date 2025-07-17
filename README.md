

Basic NX monorepo setup with a nested capacitor app in apps/app.

When you run `cap sync`, ther latest capacitor plugins don't sync.

Run:
- `yarn`
- `nx build reprod` 
- cd into `apps/app` and run `npx cap add ios` and `npx cap add android`
- cd `../..` and run `nx sync reprod` (runs npx cap sync ios)

Open `apps/app/ios/App/Podfile` or `apps/app/android/capacitor.settings.gradle`

You'll see that in both:
- @capacitor/dialog & @capacitor/browser are added
- @capacitor/file-viewer & @capacitor/file-transfer are NOT added