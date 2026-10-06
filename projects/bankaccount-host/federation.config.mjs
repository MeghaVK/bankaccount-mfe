import { withNativeFederation, fromPackageJson } from '@angular-architects/native-federation-v4/config';

export default withNativeFederation({
  name: 'bankaccount-host',

  // remotes: {
  //   'dashboard-mfe': 'http://localhost:4201/remoteEntry.json',
  //   'transactions-mfe': 'http://localhost:4202/remoteEntry.json',
  //   'profile-mfe': 'http://localhost:4203/remoteEntry.json'
  // },

  remotes: {
    'dashboard-mfe': 'https://bankaccount-dashboard.onrender.com/remoteEntry.json',
    'transactions-mfe': 'https://bankaccount-transactions.onrender.com/remoteEntry.json',
    'profile-mfe': 'https://bankaccount-profile.onrender.com/remoteEntry.json'
  },

 

  shared: fromPackageJson({ singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' })
    // includeSecondaries is an opt-out of ignoreUnusedDeps, so all of
    // @angular/core is shared to prevent mismatches.
    .patch(['@angular/core'], { includeSecondaries: { keepAll: true } }),

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  
  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // ignoreUnusedDeps is enabled by default now
    // ignoreUnusedDeps: true,

    // Opt-in: groups chunks in remoteEntry.json for smaller metadata file
    denseChunking: true
  }
});
