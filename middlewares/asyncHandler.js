const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        }catch (error) {
            console.error('error detail: ', error)
            console.log({message: error.message, stack: error.stack})
            return res.status(500).json({
                status: 500,
                message: "Internal Server Error",
                error: error
          });
        }
    }
}
export default asyncHandler;