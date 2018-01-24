export interface User {
  firstName: string,
  lastName: string,
  age?: number,  // question mark means optional
  address?: {
    street?: string,
    city?: string,
    state?: string
  },
  isActive?: boolean,
  registered?: any
}