import { initFederation } from '@angular-architects/native-federation-v4';

initFederation({
  'dashboard-mfe': 'https://bankaccount-dashboard.onrender.com/remoteEntry.json',
  'transactions-mfe': 'https://bankaccount-transactions.onrender.com/remoteEntry.json',
  'profile-mfe': 'https://bankaccount-profile.onrender.com/remoteEntry.json'
}, {
  // hostRemoteEntry: { url: "./remoteEntry.json" }
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
