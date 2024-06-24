export enum UserRole {
	admin = 'admin',
	editor = 'editor',
	guest = 'guest',
}
type RoleType = Record<UserRole, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: RoleType = {
	admin: 'Admin User',
	editor: 'Editor User',
	guest: 'Guest User',
};
