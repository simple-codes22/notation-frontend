// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brandBg: {
            '100': '#e8ecf0',
            '900': '#2d2d2d',
        }
    }
})

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}