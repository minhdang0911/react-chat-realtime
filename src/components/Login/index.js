import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../Firebase/Config';
import { addDocument, generateKeywords } from '../../Firebase/services';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
    const handleLogin = async (provider) => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
        }
    };

    return (
        <div>
            <Row justify="center" style={{ height: '100vh' }}>
                <Col xs={22} sm={16} md={12} lg={8}>
                    <Title style={{ textAlign: 'center', marginBottom: 50 }} level={3}>
                        React App Chat
                    </Title>
                    <Button
                        block
                        style={{ marginBottom: 20 }}
                        onClick={() => handleLogin(googleProvider)}
                        icon={<GoogleOutlined />}
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        block
                        onClick={() => handleLogin(fbProvider)}
                        icon={<FacebookOutlined />}
                        style={{ backgroundColor: '#3b5998', borderColor: '#3b5998' }}
                    >
                        Sign in with Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
