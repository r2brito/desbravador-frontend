import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockInitializeApp = vi.fn(() => ({ name: 'test-app' }))
const mockGetAnalytics = vi.fn(() => ({ name: 'test-analytics' }))
const mockIsSupported = vi.fn(async () => false)

vi.mock('firebase/app', () => ({
  initializeApp: mockInitializeApp,
}))

vi.mock('firebase/analytics', () => ({
  getAnalytics: mockGetAnalytics,
  isSupported: mockIsSupported,
}))

describe('firebase bootstrap', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('nao inicializa analytics fora do browser', async () => {
    const module = await import('./firebase')

    const analytics = await module.initFirebaseAnalytics()

    expect(analytics).toBeNull()
    expect(mockIsSupported).not.toHaveBeenCalled()
    expect(mockGetAnalytics).not.toHaveBeenCalled()
  })
})
