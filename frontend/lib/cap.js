// Use Next.js API route as proxy to avoid CORS issues
export async function getFeedback() {
  try {
    const response = await fetch('/api/feedback');
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    const data = await response.json();
    return data.value || [];
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
}

export async function createFeedback(payload) {
  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating feedback:', error);
    throw error;
  }
}
