interface Window {
    ethereum: {
        request: (args: { method: string, params?: any[] }) => Promise<any>;
        [key: string]: any;
    };
}
