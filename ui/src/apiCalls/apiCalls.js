export const getAllActivities = async () => {
  const url = "https://kidsactivities.herokuapp.com/api/v1/activities/";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable To Fetch Your Data. Try Later.");
  }
  return response.json();
};
