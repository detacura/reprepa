function getUserProperty<T, K extends keyof T>(users: T[], key: K): T[K][] {
  return users.map(user => user[key]);
}
