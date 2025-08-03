interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface ProfileAvatar {
  src: string
  alt: string
  width: number
  height: number
}

interface ProfileBio {
  greeting: string
  description: string
}

interface ProfileSEO {
  title: string
  description: string
  keywords: string
  jobTitle: string
  url: string
}

interface ProfileData {
  name: string
  avatar: ProfileAvatar
  bio: ProfileBio
  seo: ProfileSEO
  social: SocialLink[]
  expertise: string[]
}

export const useProfile = () => {
  return useAsyncData('profile', async () => {
    return await queryCollection('profile').first()
  }) as { data: Ref<ProfileData | null>, pending: Ref<boolean>, error: Ref<Error | null>, refresh: () => Promise<void> }
}
