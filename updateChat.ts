async updateChat(dtoList: DeleteChatDto[]): Promise<any> {
    // const success = true;
    const response: any = {};
    try {
      for (const x of dtoList) {
        const chats: any[] = await this.findChats(x);
        if (chats.length === 0) {
          response.message = 'No chat records found';
          response.code = '404';
          return response;
          // return false;
        }
        if (chats[0]?.deletedBy) await this.setIsDeleted(x);
        else await this.setDeletedBy(x);
      }
      return response;
    } catch (error) {
      response.message = error.message;
      response.code = '501';
      return response;
    }
  }
