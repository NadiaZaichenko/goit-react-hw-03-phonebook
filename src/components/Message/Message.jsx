import PropTypes from 'prop-types'

export const Message = ({message}) => {
return (
    <><p>
        {message}
    </p>
    </>
)
}

Message.propTypes = {
    message: PropTypes.string.isRequired
}

