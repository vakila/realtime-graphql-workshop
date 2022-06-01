import client from "./apollo";
import { MUTATION_MARK_USER_ONLINE, MUTATION_NEW_USER } from "./GraphQL";

const getUserId = async () => {
  const { data } = await client.mutate({
    mutation: MUTATION_NEW_USER,
    variables: {},
  });

  try {
    if (data?.insert_user.returning.length > 0) {
      const { id } = data.insert_user.returning[0] || {};

      reportUserOnline(id);
      return id;
    } else {
      throw new Error(400);
    }
  } catch (error) {
    console.error(error);
    throw new Error(400);
  }
};

const reportUserOnline = (userId) => {
  window.setInterval(async () => {
    try {
      await client.mutate({
        mutation: MUTATION_MARK_USER_ONLINE,
        variables: {
          uuid: userId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
};

export { getUserId };