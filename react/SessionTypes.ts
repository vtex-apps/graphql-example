export interface SessionSuccess {
  id: string
  namespaces: {
    [key: string]: Record<string, unknown>
    public: Record<string, { value: string }>
  }
}

export interface SessionUnauthorized {
  type: 'Unauthorized'
  message: string
}

export interface SessionForbidden {
  type: 'Forbidden'
  message: string
}

export type Session = SessionSuccess | SessionUnauthorized | SessionForbidden
