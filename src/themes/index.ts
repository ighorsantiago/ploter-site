import { CLIENT } from '../constants/client'

export const theme = {
    // backgrounds
    bgDark: CLIENT.theme.primaryColor,  // seções escuras: hero, whyUs, footer
    bgLight: '#ffffff',                  // seções claras: services, gallery
    bgMuted: '#f9fafb',                  // seções neutras: contact

    // text
    textPrimary: '#111827',
    textSecondary: '#6b7280',
    textMuted: '#9ca3af',
    textOnDark: '#ffffff',
    textOnAccent: '#ffffff',

    // accent
    accent: CLIENT.theme.accentColor,

    // borders
    border: 'rgba(0,0,0,0.06)',

    // status
    success: '#22c55e',
    danger: '#ef4444',
    warning: '#f59e0b',
}
