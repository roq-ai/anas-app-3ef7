interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Store Manager', 'Sales Representative', 'Customer Service Representative'],
  tenantName: 'Team',
  applicationName: 'ANAS App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage orders', 'Manage products', 'Manage users', 'Manage teams'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0d40b961-d232-4d75-bb3c-dcf8ca957f30',
};
