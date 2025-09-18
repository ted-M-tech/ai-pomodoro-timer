// Call API route and create refresh suggestion
export async function generateRefreshSuggestion(): Promise<string>{
    try {
        // call API
        const response = await fetch('/api/refresh-suggestion');
        const data = await response.json();
        return data.suggestion;
    } catch (error) {
        console.error(error);
        return 'error occur';
    }
}