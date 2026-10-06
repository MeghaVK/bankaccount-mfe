import { initFederation } from '@angular-architects/native-federation-v4';

// initFederation({}, {
//   hostRemoteEntry: { url: "./remoteEntry.json" }
// })
initFederation({
   'dashboard-mfe': 'http://localhost:4201/remoteEntry.json',
  'transactions-mfe': 'http://localhost:4202/remoteEntry.json',
  'profile-mfe': 'http://localhost:4203/remoteEntry.json'
}, {
  // hostRemoteEntry: { url: "./remoteEntry.json" }
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
