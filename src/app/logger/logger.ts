export const logInfo = (message: string, context: string, data?: any) => {
    console.info({
        context, message, data, logLevel: 'INFO'
    })
}