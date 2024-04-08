// app/providers.tsx
'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    
})

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider>{children}</ChakraProvider>
}